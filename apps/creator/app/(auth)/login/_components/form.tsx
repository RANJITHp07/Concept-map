import React from "react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "@repo/ui/components/TextInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../../../lib/validator/login";
import apiHelper from "../../../../lib/apiHelper";
import { apis } from "../../../../lib/api";
import { useRouter } from "next/navigation";

function Form() {
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
    };
    const res = await apiHelper(apis.login, "POST", userData);
    if (res.status === "success") {
      router.replace("/");
    } else if (res.status === "error") {
      // display the error to the user
      console.log(res.error.message);
    }
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
                placeholder="6+ strong characters"
                type="password"
                errorMessage={errors.password?.message as string}
              />

              <button
                type="submit"
                className="w-full bg-[#f5a623] text-white py-3.5 rounded-lg font-medium hover:bg-[#e69516] transition-colors mt-4"
              >
                Create an Account
              </button>
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
              Have an account?{" "}
              <Link
                href="/register"
                className="text-[#f5a623] hover:text-[#e69516]"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="  p-6 flex justify-center items-center ">
        <Image
          src="/auth/img-1.png"
          alt="Concepts Map"
          width={600}
          height={100}
          className="w-[600px] h-[700px] hidden lg:block md:block"
        />
      </div>
    </>
  );
}

export default Form;
