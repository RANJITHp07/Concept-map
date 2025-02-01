"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "@repo/ui/components/TextInput";
import Button from "@repo/ui/components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "../../../../lib/validator/registration";
import apiHelper from "../../../../lib/apiHelper";
import { apis } from "../../../../lib/api";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import ScriptFestival from "../../_components/slider";

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    clearErrors,
    getValues,
    setValue,
    setError,
  } = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const handleInputFieldChange = (field: string, value: string) => {
    setValue(field, value);
    clearErrors(field);
  };

  const onSubmit = async (data: any) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }
    setIsLoading(true);
    const userData = {
      username: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    };
    const res = await apiHelper(apis.register, "POST", userData);

    if (res.status == "success" && res.data) {
      const userId = res.data._id;
      const response = await apiHelper(apis.generateOtp, "POST", { userId });

      if (response.status == "success") {
        sessionStorage.setItem("RegisteredUser", userId);
        router.replace("/verify-otp");
      }
    } else if (res.status == "error") {
      //dispaly the error message
      toast.error(res.error?.message || "An error occurred");
      console.log(res.error.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen flex w-full md:w-1/2">
        {/* Left Section - Form */}
        <div className="w-full p-6 lg:p-8 flex flex-col">
          {/* Header */}

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
            <div className="flex items-center ">
              <div className="flex items-center">
                <Image
                  src="/logo_.png"
                  alt="Concepts Map"
                  width={280}
                  height={60}
                  className="w-auto h-auto"
                />
              </div>
            </div>

            <div className="text-center mt-2 mb-5">
              <p className="text-gray-400 text-sm text-start mt-2">
                Welcome to our portal where you can explore ultimate ads
                concepts from fresh and talented brains.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <TextInput
                label="Full Name"
                htmlFor="name"
                value={getValues("name")}
                onChange={(value) =>
                  handleInputFieldChange("name", value as string)
                }
                placeholder="John Doe"
                type="text"
                errorMessage={errors.name?.message as string}
              />

              <TextInput
                label="E-mail"
                htmlFor="email"
                value={getValues("email")}
                placeholder="example@gmail.com"
                onChange={(value) =>
                  handleInputFieldChange("email", value as string)
                }
                type="text"
                errorMessage={errors.email?.message as string}
              />

              <TextInput
                label="Password"
                htmlFor="password"
                value={getValues("password")}
                onChange={(value) =>
                  handleInputFieldChange("password", value as string)
                }
                placeholder="8+ strong characters"
                type="password"
                errorMessage={errors.password?.message as string}
              />

              <TextInput
                label="Confirm Password"
                htmlFor="confirmPassword"
                value={getValues("confirmPassword")}
                onChange={(value) =>
                  handleInputFieldChange("confirmPassword", value as string)
                }
                placeholder="Confirm your password"
                type="password"
                errorMessage={errors.confirmPassword?.message as string}
              />
              <div className="space-y-1">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-400"
                >
                  Select Role
                </label>
                <select
                  id="role"
                  disabled={isLoading}
                  className="mt-1 cursor-pointer block w-full px-3 py-3.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#f5a623]"
                  value={getValues("role")}
                  onChange={(e) =>
                    handleInputFieldChange("role", e.target.value)
                  }
                >
                  <option value="BUYER">Buyer</option>
                  <option value="CREATOR">Creator</option>
                </select>
                {errors.role && (
                  <p className="text-red-500 text-sm">
                    {errors.role.message as string}
                  </p>
                )}
              </div>
              <div className="my-3">
                <Button
                  actionName="Create an Account"
                  type="submit"
                  isDisabled={isLoading}
                  loadingName="Sending OTP..."
                />
              </div>
            </form>

            {/* Social Login */}
            <div className="mt-8 mb-3">
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-400">
                    Or sign up with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <button
                  className="flex justify-center items-center p-3.5 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors"
                  aria-label="Sign in with Google"
                >
                  <Image
                    src="/auth/logo.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </button>
                <button
                  className="flex justify-center items-center p-3.5 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors"
                  aria-label="Sign in with LinkedIn"
                >
                  <Image
                    src="/auth/LinkedIn.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </button>
                <button
                  className="flex justify-center items-center p-3.5 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors"
                  aria-label="Sign in with Facebook"
                >
                  <Image
                    src="/auth/face-book.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </button>
              </div>
              <div className="text-sm text-gray-600 flex justify-center mt-5">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#f5a623] hover:text-[#e69516] mx-1"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center  flex ">
        <div className="  p-6 hidden lg:block md:block ">
          <ScriptFestival />
        </div>
      </div>
    </>
  );
}

export default Form;
