import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "@repo/ui/components/TextInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../../../lib/validator/login";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Button from "@repo/ui/components/Button";
import { handleLogin } from "../../../../lib/serverAction";
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
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleInputFieldChange = (field: string, value: string) => {
    setValue(field, value);
    clearErrors(field);
  };

  const onSubmit = async (data: any) => {
    const userData = {
      email: data.email,
      password: data.password,
      role: data.role,
    };
    setIsLoading(true);

    const authentication = await handleLogin(
      userData.email,
      userData.password,
      userData.role
    );
    if (authentication && authentication.status == "success") {
      if (userData.role == "BUYER") {
        router.push("/");
      } else {
        router.push("/creator-dashboard");
      }
    } else {
      //dispaly the error message
      toast.error(authentication?.error?.message!);
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className=" flex w-full  md:w-1/2">
        {/* Left Section - Form */}
        <div className="w-full p-6 lg:p-8 flex flex-col items-center ">
          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
            <div className="flex items-center ">
              <div className="flex items-center">
                <Image
                  src="/logo_.png"
                  alt="Concepts Map"
                  width={240}
                  height={50}
                  className="w-auto h-auto"
                />
              </div>
            </div>

            <div className=" mt-2 mb-5">
              <p className="text-gray-400 text-sm">
                Welcome to our portal where you can explore ultimate ads
                concepts from fresh and talented brains.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
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

              {/* Role Selection */}
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
                  <option value="CREATOR">Creator</option>
                  <option value="BUYER">Buyer</option>
                </select>
                {errors.role && (
                  <p className="text-red-500 text-sm">
                    {errors.role.message as string}
                  </p>
                )}
              </div>

              <div className="my-3">
                <Button
                  actionName="Login"
                  type="submit"
                  isDisabled={isLoading}
                  loadingName="Verifying..."
                />
              </div>
            </form>

            {/* Social Login */}
            <div className="mt-8 grid grid-cols-3 gap-4">
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
            <div className="text-sm text-gray-600 justify-center  flex mt-5">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-[#f5a623] hover:text-[#e69516] mx-1"
              >
                Sign In
              </Link>
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
