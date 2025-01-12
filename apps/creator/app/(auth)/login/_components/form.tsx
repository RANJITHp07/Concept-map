import React from "react";
import Image from "next/image";
import Link from "next/link";

function Form() {
  return (
    <div className="min-h-screen flex w-full  md:w-1/2 ">
      {/* Left Section - Form */}
      <div className="w-full p-6 lg:p-8 flex flex-col ">
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
          <form className="space-y-6">
            <div>
              <label className="block text-gray-400 text-sm mb-2">E-mail</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#f5a623] text-gray-600 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Password</label>
              <input
                type="password"
                placeholder="6+ strong character"
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#f5a623] text-gray-600 placeholder-gray-400"
              />
            </div>
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
            <Link href="/register" className="text-[#f5a623] hover:text-[#e69516]">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;

