"use server";
import { signIn } from "../auth";
import { AuthError } from "next-auth";

const handleRegistration = async (userId: string, otpString: string) => {
  try {
    const response = await signIn("credentials", {
      userId,
      password: "", // Since it is registration
      email: "", // Since it is registration
      type: "register",
      code: otpString,
      redirect: false,
    });
    return {
      status: "success",
      data: response,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      
      return {
        status: "error",
        error: {
          message: error?.cause?.err?.message,
        },
      };
    }
  }
};

export default handleRegistration;
