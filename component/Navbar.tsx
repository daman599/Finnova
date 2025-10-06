"use client";

import { useState } from "react";
import { inriaSerif } from "@/lib/font";
import { ChevronDown, ArrowRight } from "lucide-react";

interface CardType {
  title: string;
  features: string[];
}

const Card: CardType[] = [
  { title: "Daily Finances", features: ["Account Transfer", "Analytics", "Budgeting", "Accounts "] },
  { title: "Finnova Card", features: ["Card", "Card features"] },
  { title: "Investments", features: ["Global Transfers ", "Security", "Stocks"] },
  { title: "Crypto", features: ["Various crypto assests ", "Advantages"] },
  { title: "Prices", features: ["Standard ", "Pro", "Ultra pro max"] },
];

export default function Navbar() {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 bg-white/30 backdrop-blur-md text-black px-1 md:px-6 lg:px-13 py-4 md:py-2 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-1 lg:gap-3">
          {["Personal", "Business", "Company"].map((item, index) => (
            <button
              key={index}
              onClick={() => {
                if (item === "Personal") {
                  setActive(!active);
                }
              }}
              className="px-1 md:px-2 lg:px-3 py-0.5 md:py-1 rounded-xl hover:bg-gray-200 font-medium text-xs text-gray-600 flex items-center justify-center gap-0.5 md:gap-1"
            >
              {item}
              <ChevronDown size={12} className="text-gray-400" />
            </button>
          ))}
        </div>

        <span
          className={`absolute left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl lg:text-4xl font-bold ${inriaSerif.className}`}
        >
          Finnova
        </span>

        <div className="hidden md:flex items-center gap-2 md:gap-4 lg:gap-6">
          {["Help", "Blog", "En"].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-0.5 md:gap-1 font-semibold text-xs text-gray-700 cursor-pointer"
            >
              {item}
              {index === 2 && <ChevronDown size={12} className="text-gray-600" />}
            </div>
          ))}

          <span className="px-2 md:px-4 py-0.5 md:py-1 rounded-full shadow-md shadow-[#058E00]/20 bg-black text-white text-xs font-medium cursor-pointer hover:scale-105 transition">
            Log in
          </span>

        </div>
      </nav >

      {/* Personal Block */}
      {active && (
        <div className="p-5 absolute md:top-16 lg:top-14 md:left-8 lg:left-12 max-w-xl max-h-[40rem] rounded-4xl bg-[#eeeeee] mb-16 z-40 shadow-lg
                  before:content-[''] before:absolute before:-top-3 before:left-6 
                  before:border-l-8 before:border-r-8 before:border-b-8 
                  before:border-l-transparent before:border-r-transparent before:border-b-[#eeeeee]">

          <div className="flex items-center pl-6 gap-2">
            <p className="font-medium text-base md:text-lg lg:text-xl">Discover Finnova Personal</p>
            <ArrowRight size={20} />
          </div>

          <div className="flex flex-wrap py-5">
            {Card.map((obj, index) => (
              <div key={index} className="flex px-7 py-5 w-[50%]">
                <div className="flex flex-col gap-2 lg:gap-3">
                  <p className="font-semibold md:text-sm lg:text-base">{obj.title}</p>
                  <div className="flex flex-col md:space-y-1 lg:space-y-2 font-medium text-xs md:text-sm lg:text-base text-[#535353]">
                    {obj.features.map((ele, i) => (
                      <span key={i}>{ele}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
      }
    </>
  );
}