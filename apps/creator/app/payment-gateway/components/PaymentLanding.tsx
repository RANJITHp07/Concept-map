'use client'
import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { FaRegCircleDot } from "react-icons/fa6";
import { BsCreditCard2Front } from "react-icons/bs";
import { IoLockClosedOutline } from "react-icons/io5";
import decoument from '../../../public/0349e3aebe4b04c5ba20b72946ba67ae.png'
import Image from "next/image";
import './payment.css'

interface DropdownArrowProps {
  isOpen: boolean;
}

const DropdownArrow: React.FC<DropdownArrowProps> = ({ isOpen }) => (
  <svg
    className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const PaymentLanding: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [isCountryOpen, setIsCountryOpen] = useState<boolean>(false);
  const [isStateOpen, setIsStateOpen] = useState<boolean>(false);

  const countries: string[] = [
    "South Africa",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "India",
    "Germany",
    "France",
    "Japan",
    "Brazil"
  ];

  const states: string[] = [
    "State 1",
    "State 2",
    "State 3",
    "State 4",
    "State 5"
  ];

  return (
    <>
      <section className=" px-[10px] md:px-[50px] lg:px-[100px] py-[50px] custom-padding">
        <div>
          <div className="flex items-centera gap-[20px] md:gap-[40px] lg:gap-[80px]">
            <div className="flex items-center gap-[5px] md:gap-[10px]">
              <div className="w-[30px] h-[30px]  md:w-[45px] md:h-[45px] bg-[#FEC961] flex items-center justify-center rounded-full">
                <MdOutlineDone className="text-white text-[12px] md:text-[25px]" />
              </div>
              <div>
                <p className="text-[#8D8D8D] text-[12px] md:text-[18px] lg:text-[22px]">Order Details</p>
              
              </div>
            </div>

            <div className="flex items-center gap-[10px]">
              <div className="w-[30px] h-[30px]  md:w-[45px] md:h-[45px] bg-[#FEC961] flex items-center justify-center rounded-full">
                <div className="text-white font-bold text-[12px] md:text-[25px]">
                  <p>2</p>
                </div>
              </div>
              <div>
                <p className="text-[#8D8D8D] text-[12px] md:text-[18px] lg:text-[22px]">Confirm & Pay</p>
               
              </div>
            </div>

            <div className="flex items-center gap-[10px]">
              <div className=" w-[30px] h-[30px]  md:w-[45px] md:h-[45px] bg-[#FEC961] flex items-center justify-center rounded-full">
                <div className="text-white font-bold text-[12px] md:text-[25px]">
                  <p>3</p>
                </div>
              </div>
              <div>
                <p className="text-[#8D8D8D] text-[12px] md:text-[18px] lg:text-[22px]">Submit Requirements</p>
            
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[20px]">
            <div className="lg:col-span-8">
              <div className="border">
                <div className="bg-[#B9B8B821] px-[20px] py-[10px] md:px-[30px] md:py-[20px]">
                  <p className="text-[18px] md:text-[20px] text-[#8D8D8D]">Billing information</p>
                </div>
                <div className="px-[20px] py-[10px] md:px-[30px] md:py-[20px] bg-white border-gray-200">
                  <p className="text-gray-700 font-medium text-[14px] md:text-[18px]">
                    For tax purposes, please fill out these fields.
                  </p>
                  <div className="pt-[20px] space-y-4">
                    {/* Country Dropdown */}
                    <div>
                      <p className="mb-2 text-gray-800 font-medium text-[14px] md:text-[18px]">Country</p>
                      <div className="relative">
                        <div
                          className="w-[100%] lg:w-[80%] p-2 md:p-3 border-gray-300 border rounded-md flex justify-between items-center cursor-pointer bg-white"
                          onClick={() => {
                            setIsCountryOpen(!isCountryOpen);
                            setIsStateOpen(false);
                          }}
                        >
                          <span
                        className={`${
                          selectedCountry ? "text-gray-800" : "text-gray-400"
                        } text-[14px] md:text-[18px]`}
                      >
                        {selectedCountry || "South Africa"}
                      </span>
                      
                          <DropdownArrow isOpen={isCountryOpen} />
                        </div>
                        {isCountryOpen && (
                          <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto z-20">
                            {countries.map((country) => (
                              <div
                                key={country}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setIsCountryOpen(false);
                                }}
                              >
                                {country}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* State/Union Territory Dropdown */}
                    <div>
                      <p className="mb-2 text-gray-800 font-medium text-[14px] md:text-[18px]]">State/Union Territory</p>
                      <div className="relative">
                        <div
                          className="w-[100%] lg:w-[80%] p-2 md:p-3 border border-gray-300 rounded-md flex justify-between items-center cursor-pointer bg-white"
                          onClick={() => {
                            setIsStateOpen(!isStateOpen);
                            setIsCountryOpen(false);
                          }}
                        >
                      <span
  className={`${
    selectedState ? "text-gray-800" : "text-gray-400"
  } text-[14px] md:text-[18px]`}
>
  {selectedState || ""}
</span>

                          <DropdownArrow isOpen={isStateOpen} />
                        </div>
                        {isStateOpen && (
                          <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto z-20">
                            {states.map((state) => (
                              <div
                                key={state}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                  setSelectedState(state);
                                  setIsStateOpen(false);
                                }}
                              >
                                {state}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-[20px]">
                <div className="border">
                  <div className="bg-[#B9B8B821] px-[20px] py-[10px] md:px-[30px] md:py-[20px]">
                    <p className="text-[18px] md:text-[20px] text-[#8D8D8D]">Payment Options</p>
                  </div>
                  <div className="px-[20px] py-[10px] md:px-[30px] md:py-[20px] flex items-center gap-[10px]">
                    <FaRegCircleDot className="h-[20px] w-[20px]" />
                    <p className="text-[14px] md:text-[18px] text-#8D8D8D]">Credit & Debit Cards</p>
                  </div>
                  <div className="px-[20px] py-[10px] md:px-[30px] md:py-[20px]">
                    <div className="w-[100%] lg:w-[80%] space-y-4">
                      {/* Card Number Input */}
                      <div>
                        <p className="mb-2 text-gray-800 font-medium text-[14px] md:text-[18px]">Card number</p>
                      
                        <div className="relative">
  <input
    type="text"
    placeholder="1234 5678 9012 3456"
    className="w-full p-2 md:p-4 border border-gray-300 rounded-md pl-12 pr-12 tracking-widest md:tracking-normal md:text-lg md:pl-16 md:pr-16 text-[12px] md:text-[14px]"
  />
  <BsCreditCard2Front className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg md:text-xl" />
  <IoLockClosedOutline className="absolute right-4 md:right-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg md:text-xl" />
</div>


                      </div>

                      {/* Expiration Date and Security Code */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="mb-2 text-gray-800 font-medium text-[14px] md:text-[18px]">Expiration date</p>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full p-2 md:p-3 border border-gray-300 rounded-md text-[12px] md:text-[14px]"
                          />
                        </div>
                        <div>
                          <p className="mb-2 text-gray-800 font-medium text-[14px] md:text-[18px]">Security code</p>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full p-2 md:p-3 border border-gray-300 rounded-md text-[12px] md:text-[14px]"
                          />
                        </div>
                      </div>

                      {/* Cardholder Name */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="mb-2 text-gray-800 font-medium text-[14px] md:text-[18px]">Cardholder's name</p>
                          <input
                            type="text"
                            placeholder="As written on card"
                            className="w-full p-2 md:p-3 border border-gray-300 rounded-md text-[12px] md:text-[14px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>





            <div className="lg:col-span-4">
       


                <div className="px-[20px] py-[10px] md:px-[30px] md:py-[20px] border ">


                    <div className="flex gap-[20px] items-center pb-[20px] border-b ">
                    <Image alt="document" className="w-[50px] h-[50px]  md:w-[90px] md:h-[90px]" src={decoument}   />
                    <p className="text-[14px] md:text-[20px] text-[#8D8D8D] custom-font">I will provide industry 
standard script coverage 
and development 
notes on your script</p>
                    </div>
                    <div className="pt-[20px] pb-[80px]">
                        <div className="flex justify-between items-center">
                            <p className=" text-[18px] md:text-[25px] font-bold">Script</p>
                            <p className="text-[18px] md:text-[25px] font-bold">$480</p>
                          
                        </div>
                        <p className="w-[90%] pt-[10px]  text-[#8D8D8D]  text-[14px] md:text-[18px]" >Feedback and studio notes on your
                        script up to 70 pages</p>
                    </div>
                    
                    <div className="flex justify-between pb-[20px] border-b items-center">
                        <p className="text-[18px] md:text-[25px] text-[#8D8D8D]">Service fee</p>
                        <p className="text-[20px] md:text-[28px] text-[#8D8D8D]">$30</p>
                    </div>
                    <div className="pt-[30px] flex justify-between items-center">
                            <p className="text-[18px] md:text-[24px] text-[#8D8D8D]">Total</p>
                            <p className="text-[22px] md:text-[28px] font-bold">$510</p>

                         
                    </div>
                    <div className="text-center pt-[30px] ">
 <button className=" px-[30px] py-[5px]  md:px-[60px] md:py-[5px] bg-[#FEC961] rounded-[10px] text-white text-[16px] md:text-[20px]">Confirm & pay</button>
                    </div>
                   
      
                </div>
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentLanding;