import Image from "next/image";
import Link from "next/link";

export default function ScriptFestival() {
  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col items-center">
      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Left Column - Image */}
        <div className="relative">
          <Image
            src="/auth/img-1.jpg"
            alt="Student writing"
            width={800}
            height={900}
            className="w-64 h-72 rounded-lg"
          />
        </div>

        {/* Right Column - Event Details */}
        <div className="space-y-4">
          <div className="items-center gap-1 flex flex-col justify-center">
            <Image
              src="/logo_.png"
              alt="Concepts Map"
              width={120}
              height={80}
              className="w-auto h-auto"
            />
            <h1 className="text-[#f5a623] text-xl tracking-[8px]">PRESENTS</h1>
          </div>

          <div className="flex justify-center">
            {/* Date Box */}
            <div className="bg-gray-100 p-4 rounded-lg w-44">
              <div className="text-center">
<<<<<<< HEAD
                <div className="text-3xl font-bold text-gray-800">16</div>
                <div className="text-lg text-gray-600">Sep</div>
                <div className="text-xl text-gray-700">2023</div>
                <div className="mt-1 text-sm text-gray-600">10 am to 6 pm</div>
                <div className="mt-4 text-sm text-gray-600 leading-tight">
=======
                <div className="text-4xl font-bold text-gray-800">26</div>
                <div className="text-xl text-gray-600">Feb</div>
                <div className="text-2xl text-gray-700">2025</div>
                <div className="mt-2 text-sm text-gray-600">10 am to 6 pm</div>
                <div className="mt-6 text-sm text-gray-600 leading-tight">
>>>>>>> d762d4de53ca07c01dcaf563ebf171f029a4d573
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
      <div className="mt-8 text-center">
        {/* Spark Logo */}
<<<<<<< HEAD
        <div className="flex justify-center mb-3">
          <div className="bg-[#f5a623] text-white w-20 h-16 p-3 rounded-lg relative">
            <div className="text-3xl font-extrabold text-black absolute -top-6 left-[0px] ">
              Spark
            </div>
            <div className="text-5xl font-bold absolute  ">23</div>
=======
        <div className="flex justify-center mb-5">
          <div className="bg-[#f5a623] text-white w-28 h-20 p-4 rounded-lg ">
            <div className="text-4xl font-extrabold text-black relative bottom-10 right-2">
              Spark
            </div>
            <div className="text-6xl font-bold relative bottom-10">23</div>
>>>>>>> d762d4de53ca07c01dcaf563ebf171f029a4d573
          </div>
        </div>

        <h2 className="text-xl md:text-3xl text-gray-800 font-light leading-tight">
          Annual Script Writing Festival
        </h2>
      </div>

      {/* Register Button */}
      <div className="mt-1">
        <h2 className="text-xl md:text-3xl text-gray-800 font-light leading-tight ">
          for TVC and Short Form Video
        </h2>
        <div className="flex justify-center mt-3">

        <Link
          href="/register"
          className="bg-[#f5a623] text-white px-6 py-2 rounded-full inline-flex items-center gap-2 hover:bg-[#e69516] transition-colors"
        >
          REGISTER NOW
          <svg
            width="16"
            height="16"
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
      </div>

      {/* Footer */}
      <div className="mt-6">
        <p className="text-lg text-gray-500 tracking-wide">
          Pitches | Workshops | Awards
        </p>
      </div>
    </div>
  );
}
