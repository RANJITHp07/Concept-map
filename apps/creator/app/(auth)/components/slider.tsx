import Image from "next/image";
import React from "react";

function slider() {
  return (
    <div>
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

export default slider;
