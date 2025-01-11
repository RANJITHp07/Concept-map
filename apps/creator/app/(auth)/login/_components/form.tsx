import React from "react";
import Image from "next/image";
import Link from "next/link";

function form() {
  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Section - Full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col">
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <div /> {/* Empty div for spacing */}
            <div className="text-sm">
              Have an account ?{" "}
              <Link href="/register" className="text-[#f5a623]">
                Sign In
              </Link>
            </div>
          </div>

          <div className="max-w-md mx-auto w-full">
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Concepts Map"
                  width={40}
                  height={40}
                  className="w-8"
                />
                <h1 className="text-2xl md:text-3xl font-bold">CONCEPTS MAP</h1>
              </div>
              <p className="text-gray-500 mt-4 text-sm md:text-base">
                Welcome to our portal where you can explore ultimate ads
                concepts from fresh and talented brains.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">E-mail</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#f5a623]"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  placeholder="6+ strong character"
                  className="w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#f5a623]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#f5a623] text-white py-3 rounded font-medium hover:bg-[#e69516] transition-colors"
              >
                Create an Account
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">
                    Or sign up with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <button className="flex justify-center items-center py-2 px-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Image
                    src="/google.svg"
                    alt="Google"
                    width={24}
                    height={24}
                  />
                </button>
                <button className="flex justify-center items-center py-2 px-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Image
                    src="/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </button>
                <button className="flex justify-center items-center py-2 px-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default form;
