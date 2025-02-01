"use client";
import React from "react";
import { useRouter } from "next/navigation"; // For navigation
import Image from "next/image";

const ErrorPage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/"); // Navigate to the homepage
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="text-center max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          We encountered an unexpected error. Please try again later or return
          to the homepage.
        </p>
        <button
          onClick={handleGoHome}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
