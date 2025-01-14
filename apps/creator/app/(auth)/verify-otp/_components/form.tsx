"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "../../../../auth";
import handleRegistration from "../../../../lib/serverAction";

function OtpVerificationForm() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if value is entered
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join("");
    const userId = localStorage.getItem("RegisteredUser");

    const authentication = await handleRegistration(userId!, otpString);

    if (authentication && authentication.status == "success") {
      router.push("/");
    } else {
      //dispaly the error message
      console.log(authentication?.error?.message);
    }

    // router.push('/dashboard')
  };

  return (
    <div className="min-h-screen flex w-full md:w-1/2">
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
              Please enter the 6-digit code sent to your email or phone to
              verify your account.
            </p>
          </div>

          {/* OTP Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="otp" className="block text-gray-400 text-sm mb-4">
                Enter Verification Code
              </label>
              <div className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el: any) => (inputRefs.current[index] = el)}
                    // type="number"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-2xl border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#f5a623] text-gray-600"
                    required
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#f5a623] text-white py-3.5 rounded-lg font-medium hover:bg-[#e69516] transition-colors mt-4"
            >
              Verify OTP
            </button>
          </form>

          <div className="mt-8 text-center">
            <button className="text-[#f5a623] hover:text-[#e69516] transition-colors">
              Resend Code
            </button>
          </div>
          <div className="text-sm text-gray-600 flex justify-center mt-5">
            Need help?{" "}
            <Link
              href="/contact"
              className="text-[#f5a623] hover:text-[#e69516]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpVerificationForm;
