"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "@repo/ui/components/TextInput";
import { Button } from "@repo/ui/components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "../../../../lib/validator/registration";
import apiHelper from "../../../../lib/apiHelper";
import { apis } from "../../../../lib/api";
import { useRouter } from "next/navigation";
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
      role: "BUYER",
    };

    try {
      const res = await apiHelper(apis.register, "POST", userData);

      if (res.status === "success" && res.data) {
        const userId = res.data._id;
        const response = await apiHelper(apis.generateOtp, "POST", { userId });

        if (response.status === "success") {
          sessionStorage.setItem("RegisteredUser", userId);
          router.replace("/verify-otp");
        }
      } else if (res.status === "error") {
        console.log(res.error.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex-1 md:w-1/2 p-4 md:p-6 lg:p-8 flex flex-col overflow-y-auto">
        <div className="max-w-md mx-auto w-full flex flex-col gap-2">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo_.png"
              alt="Concepts Map"
              width={240}
              height={50}
              className="w-auto h-auto"
            />
          </div>

          {/* Welcome Text */}
          <p className="text-gray-400 text-sm">
            Welcome to our portal where you can explore ultimate ads concepts
            from fresh and talented brains.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
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
              placeholder="6+ strong characters"
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

       
            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-[#f5a623] text-white py-3.5 rounded-lg font-medium hover:bg-[#e69516] transition-colors mt-4"
            >
              Create an Account
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-2">
            <div className="relative mb-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-400">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "Google", src: "/auth/logo.png" },
                { name: "LinkedIn", src: "/auth/LinkedIn.png" },
                { name: "Facebook", src: "/auth/face-book.png" },
              ].map((social) => (
                <button
                  key={social.name}
                  className="flex justify-center items-center p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors"
                  aria-label={`Sign in with ${social.name}`}
                >
                  <Image
                    src={social.src || "/placeholder.svg"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Sign In Link */}
          <div className="text-sm text-gray-600 text-center">
            Have an account?{" "}
            <Link href="/login" className="text-[#f5a623] hover:text-[#e69516]">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Script Festival Section */}
      <div className="hidden md:flex flex-1 p-4 justify-center items-center overflow-y-auto">
        <ScriptFestival />
      </div>
    </>
  );
}

export default Form;
