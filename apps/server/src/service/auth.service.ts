import UserModel from "../repository/model/user.model";
import { CrudRepository } from "../repository/query/crud.repository";
import { IRegister } from "../types/auth";
import { IOtp, IUser } from "../types/model";
import argon2 from "argon2";
import { CustomError } from "../utils/customError";
import { generateOTP, hasOtpExpired } from "../utils/helper";

export class AuthService {
  private crudRepository: CrudRepository<IUser | IOtp>;

  constructor() {
    this.crudRepository = new CrudRepository(UserModel);
  }

  async register(data: IRegister) {
    const user = (await this.crudRepository.fetchOneDocument({
      email: data.email,
    })) as IUser;

    if (user && user.is_verified) {
      throw new CustomError(400, "INVALID_INPUT", {
        message: "User aready exist",
      });
    } else if (user) {
      return user;
    }

    const hashPassword = await argon2.hash("password");
    return await this.crudRepository.createDocument({
      ...data,
      password: hashPassword,
    });
  }

  async login(email: string, password: string) {
    const user = (await this.crudRepository.fetchOneDocument({
      email: email,
    })) as IUser;

    if (!user || (user && user.is_verified)) {
      throw new CustomError(400, "INVALID_INPUT", {
        message: "No such user exist",
      });
    }

    if (await argon2.verify(user.password, password)) {
      return user;
    }

    throw new CustomError(400, "BAD_REQUEST", { message: "Wrong password" });
  }

  // otp related methods
  async generateVerificationOTP(userId: string) {
    const otp = (await this.crudRepository.fetchOneDocument({
      userId: userId,
      action_type: "VERIFY_EMAIL",
    })) as IOtp & { updatedAt: string };

    // Generate a new OTP code
    const newCode = generateOTP();

    if (otp) {
      if (otp.retry_count === 0 && !hasOtpExpired(otp.updatedAt)) {
        throw new CustomError(400, "BAD_REQUEST", {
          message:
            "You can only request OTP up to 3 times within an hour. Please try again later.",
        });
      }

      const count = otp.retry_count > 0 ? otp.retry_count - 1 : 3;

      return await this.crudRepository.updateDocumenById(otp._id as string, {
        code: newCode,
        retry_count: count,
      });
    } else {
      const otpData = {
        userId: userId,
        code: newCode,
      };
      return this.crudRepository.createDocument(otpData);
    }
  }

  async verifyEmail(code: number, userId: string) {
    const otp = (await this.crudRepository.fetchOneDocument({
      userId: userId,
      action_type: "VERIFY_EMAIL",
    })) as IOtp & { updatedAt: string };

    const otpUpdatedAt = new Date(otp.updatedAt);
    const now = new Date();
    const timeDifference = now.getTime() - otpUpdatedAt.getTime();
    const oneMinute = 60 * 1000;

    if (timeDifference < oneMinute) {
      throw new CustomError(400, "BAD_REQUEST", {
        message: "Otp has expired",
      });
    }
    if (otp.code === code) {
      return otp;
    }

    throw new CustomError(400, "BAD_REQUEST", { message: "Wrong OTP" });
  }
}
