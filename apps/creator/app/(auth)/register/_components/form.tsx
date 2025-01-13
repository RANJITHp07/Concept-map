"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "@repo/ui/components/TextInput";
import Button from "@repo/ui/components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "../../../../lib/validator/registration";
import apiHelper from "../../../../lib/apiHelper";
import { apis } from "../../../../lib/api";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    handleSubmit,
    formState: { errors },
    getValues,
    trigger,
    setValue,
  } = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const handleInputFieldChange = (field: string, value: string) => {
    trigger(field);
    setValue(field, value);
  };

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    const userData = {
      username: data.name,
      email: data.email,
      password: data.password,
      role: "BUYER",
    };
    const res = apiHelper(apis.register, "POST", userData);

    console.log(res);
  };

  return (
    <div className="min-h-screen flex w-full md:w-1/2">
      {/* Left Section - Form */}
      <div className="w-full p-6 lg:p-8 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-16 lg:mb-20">
          <div className="flex items-center">
            <Image
              src="/logo_.png"
              alt="Concepts Map"
              width={180}
              height={60}
              className="w-auto h-auto"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
          <div className="text-center mb-14">
            <p className="text-gray-400 text-lg">
              Welcome to our portal where you can explore ultimate ads concepts
              from fresh and talented brains.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <TextInput
              label="Full Name"
              htmlFor="name"
              value={name}
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
              value={email}
              placeholder="example@gmail.com"
              onChange={(value) =>
                handleInputFieldChange("email", value as string)
              }
              type="email"
              errorMessage={errors.email?.message as string}
            />

            <TextInput
              label="Password"
              htmlFor="password"
              value={password}
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
              value={confirmPassword}
              onChange={(value) =>
                handleInputFieldChange("confirmPassword", value as string)
              }
              placeholder="Confirm your password"
              type="password"
              errorMessage={errors.confirmPassword?.message as string}
            />
            <Button actionName="Create an Account" type="submit" />
          </form>

          {/* Social Login */}
          <div className="mt-8">
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
              Have an account?{" "}
              <Link
                href="/login"
                className="text-[#f5a623] hover:text-[#e69516]"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
