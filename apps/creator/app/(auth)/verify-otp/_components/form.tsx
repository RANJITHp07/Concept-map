"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import handleRegistration from "../../../../lib/serverAction";
import Timer from "./timer";
import Button from "@repo/ui/components/Button";
import apiHelper from "../../../../lib/apiHelper";
import { apis } from "../../../../lib/api";
import toast from "react-hot-toast";
import ScriptFestival from "../../_components/slider";

function OtpVerificationForm() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isTimerDisabled, setIsTimerDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    if (otp.length !== 6) return;

    setIsLoading(true);
    const userId = sessionStorage.getItem("RegisteredUser");

    const authentication = await handleRegistration(userId!, otpString);

    if (authentication && authentication.status == "success") {
      router.push("/");
    } else {
      //dispaly the error message
      toast.error(authentication?.error?.message!);
    }
    setIsLoading(false);
  };

  const handleResendOtp = async () => {
    const userId = sessionStorage.getItem("RegisteredUser");

    const resendOtp = await apiHelper(apis.resendOtp, "POST", { userId });

    if (resendOtp.status === "success") {
      setIsTimerDisabled(false);
    }

    console.log(resendOtp);
  };

  return (
    <>
      <div className="h-screen flex w-full md:w-1/2">
        <div className="w-full p-6 lg:p-8 flex flex-col">
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

            {/* OTP Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="otp"
                  className="block text-gray-400 text-sm mb-4"
                >
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
              <div className="my-3">
                <Button
                  actionName="Verify OTP"
                  type="submit"
                  isDisabled={isLoading}
                  loadingName="Verifying..."
                />
              </div>
            </form>

            <div className="mt-5 text-center flex justify-center gap-1">
              <p className="text-gray-400">
                {isTimerDisabled
                  ? "If you haven't received the code, click here to"
                  : "The code will expire in"}{" "}
              </p>
              {isTimerDisabled ? (
                <button
                  className="text-[#f5a623] hover:text-[#e69516] transition-colors"
                  onClick={handleResendOtp}
                >
                  resend
                </button>
              ) : (
                <Timer
                  isTimerDisabled={isTimerDisabled}
                  handleTimerDisable={() => setIsTimerDisabled(true)}
                />
              )}
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

export default OtpVerificationForm;
