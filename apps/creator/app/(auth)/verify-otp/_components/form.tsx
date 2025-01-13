"use client";
import React from "react";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function form() {
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
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join("");
    console.log("OTP submitted:", otpString);
    // Here you would typically verify the OTP
    // If successful, redirect to the next page
    // router.push('/dashboard')
  };
  return (
    <>
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <div /> {/* Empty div for spacing */}
          <div className="text-sm">
            Need help?{" "}
            <Link href="/contact" className="text-[#f5a623]">
              Contact Us
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
              Please enter the 6-digit code sent to your email or phone to
              verify your account.
            </p>
          </div>

          {/* OTP Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="otp" className="block text-sm mb-2">
                Enter Verification Code
              </label>
              <div className="flex gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-2xl border rounded focus:outline-none focus:ring-2 focus:ring-[#f5a623]"
                    required
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#f5a623] text-white py-3 rounded font-medium hover:bg-[#e69516] transition-colors"
            >
              Verify OTP
            </button>
          </form>

          <div className="mt-6 text-center">
            <button className="text-[#f5a623] hover:underline">
              Resend Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default form;
