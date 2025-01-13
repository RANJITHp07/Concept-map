"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function VerifyOTPPage() {
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
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Full width on mobile, half on desktop */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col">
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

      {/* Right Section - Hidden on mobile, shown on desktop */}
      <div className="hidden md:flex w-full md:w-1/2 bg-gray-100 p-8 items-center justify-center">
        <div className="relative max-w-lg w-full">
          <div className="absolute top-0 right-0 z-10">
            <Image
              src="/concepts-map-presents.png"
              alt="Concepts Map Presents"
              width={200}
              height={50}
            />
          </div>
          <div className="absolute top-16 right-0 z-10 bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-3xl font-semibold">16</div>
            <div>Sep</div>
            <div>2023</div>
            <div className="mt-2 text-sm">10 am to 6 pm</div>
            <div className="mt-1 text-xs text-gray-600">
              Grand Ballroom,
              <br />
              Grand Hyatt
              <br />
              Kochi Bolgatty
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/writer.jpg"
              alt="Script Writing Festival"
              width={800}
              height={600}
              className="w-full"
            />
            <div className="relative">
              <Image
                src="/spark23.png"
                alt="Spark 23"
                width={120}
                height={120}
                className="absolute -top-16 right-4"
              />
              <div className="bg-white p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Annual Script Writing Festival
                </h2>
                <h3 className="text-xl mb-4">for TVC and Short Form Video</h3>
                <button className="bg-[#f5a623] text-white px-6 py-2 rounded-full font-medium hover:bg-[#e69516] transition-colors">
                  REGISTER NOW
                </button>
                <div className="mt-4 text-gray-600">
                  Pitches | Workshops | Awards
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
