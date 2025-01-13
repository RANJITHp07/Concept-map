import Image from "next/image";
import Link from "next/link";

export default function ScriptFestival() {
  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col justify-center items-center ">
      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8 items-start ">
        {/* Left Column - Image */}
        <div className="relative">
          <Image
            src="/young-woman.avif"
            alt="Student writing"
            width={500}
            height={300}
            className="w-72 rounded-lg"
          />
        </div>

        {/* Right Column - Event Details */}
        <div className="space-y-6">
          <div className=" items-center gap-3 flex flex-col justify-center">
            <Image
              src="/logo_.png"
              alt="Concepts Map"
              width={150}
              height={100}
              className="w-auto h-auto"
            />
            <h1 className="text-[#f5a623] text-2xl tracking-[10px]">
              PRESENTS
            </h1>
          </div>

          <div className=" flex justify-center">
            {/* Date Box */}
            <div className="bg-gray-100 p-6 rounded-lg w-48 mt-5">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800">16</div>
                <div className="text-xl text-gray-600">Sep</div>
                <div className="text-2xl text-gray-700">2023</div>
                <div className="mt-2 text-sm text-gray-600">10 am to 6 pm</div>
                <div className="mt-6 text-sm text-gray-600 leading-tight">
                  Grand Ballroom,
                  <br />
                  Grand Hyatt
                  <br />
                  Kochi Bolgatty
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Festival Title */}
      <div className="mt-12 text-center ">
        {/* Spark Logo */}
        <div className="flex justify-center mb-5">
          <div className="bg-[#f5a623] text-white w-32 p-4 rounded-lg ">
            <div className="text-2xl font-bold">Spark</div>
            <div className="text-4xl font-bold">23</div>
          </div>
        </div>

        <h2 className="text-1xl  md:text-4xl lg:text-4xl text-gray-800 font-light leading-tight ">
          Annual Script Writing Festival
          <span className="block mt-2">for TVC and Short Form Video</span>
        </h2>
      </div>

      {/* Register Button */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/register"
          className="bg-[#f5a623] text-white px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#e69516] transition-colors"
        >
          REGISTER NOW
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-xl text-gray-500 tracking-wide">
          Pitches | Workshops | Awards
        </p>
      </div>
    </div>
  );
}
