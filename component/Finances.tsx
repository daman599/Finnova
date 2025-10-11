"use client"
import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function Finances() {
  const [state, setState] = useState<string>("idle");

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
      viewport={{ once: true }}

      className="flex flex-col items-center space-y-12 py-16 sm:py-20 px-2 md:px-8 lg:px-12 sm:my-5 md:my-10">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4"
      >
        <div className="flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#bebebe]/40">
          <div className="w-1 h-1 rounded-full bg-[#058E00] ring-1 ring-[#2dd327] animate-ping"></div>
          <span className="font-medium text-xs sm:text-sm text-[#058E00]">Daily Finances</span>
        </div>

        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-2xl sm:max-w-3xl text-center">
          Efficiency at its best: Finnova's daily finances
        </h2>

        <p className="font-medium text-[#A0A0A0] text-xs sm:text-sm md:text-base">
          Empowering global financial management.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-14 w-full max-w-6xl">
        {/* Left Text Block */}
        <div className="hidden md:flex flex-col items-start space-y-4 md:space-y-6 text-start md:text-left w-full md:w-1/2">
          <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 px-3 sm:px-5 py-1 sm:py-2 rounded-full backdrop-blur-lg bg-white shadow-lg shadow-[#058E00]/40 w-fit">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#058E00] shadow-[0_3px_3px_#058E00]" />
            <span className="font-medium text-[10px] sm:text-xs md:text-sm text-[#058E00]">Account Transfer</span>
          </div>

          <h3 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-xl">
            Global payments: your gateway to secure transactions
          </h3>

          <p className="text-[#9F9F9F] font-medium text-xs sm:text-sm md:text-base max-w-sm">
            Finnova simplifying payments in Australia, Europe and internationally.
          </p>
        </div>

        {/* Right Form Block */}
        <div className="flex items-center justify-center bg-[#F6F6F6] rounded-3xl max-w-[32rem] h-full p-3 md:p-6 lg:p-8 mx-auto">
          {/* Inner Card */}

          <div className="bg-white rounded-3xl md:min-w-1/2 lg:min-w-sm md:h-[75vh] flex flex-col justify-end px-4 lg:px-6 py-5 md:py-6 lg:py-8">
            {/* Amount Section */}
            <div>
              <p className="font-medium text-base md:text-lg lg:text-xl">Amount</p>
              <p className="font-medium text-xs pt-3 sm:pt-4 text-[#9F9F9F]">Send Money</p>

              <div className="bg-[#F6F6F6] rounded-2xl mt-2 flex items-center justify-between px-2 lg:px-4 py-2 sm:py-3">
                <div className="flex flex-col items-start">
                  <span className="font-normal text-sm lg:text-base">$4,289</span>
                  <span className="font-normal text-[10px] lg:text-xs text-[#9F9F9F]">Balance $16,200.00</span>
                </div>

                <div className="bg-white rounded-2xl flex items-center justify-center gap-1 lg:gap-2 p-1.5 shadow-sm">
                  <span className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#003282]" />
                  <span className="font-normal text-[10px] lg:text-xs">USD</span>
                  <ChevronDown size={12} />
                </div>
              </div>
            </div>

            {/* Receiver Section */}
            <div className="mt-6 sm:mt-8 md:mt-9 lg:mt-10">
              <p className="font-medium text-xs text-[#9F9F9F]">
                Who are you sending your money to?
              </p>

              <div className="bg-[#F6F6F6] rounded-2xl mt-2 flex items-center justify-between px-2 lg:px-4 py-2 lg:py-3">
                <div className="flex items-center gap-1 lg:gap-3">
                  <span className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#c31574] flex justify-center items-center text-white text-xs sm:text-sm md:text-base">
                    J
                  </span>
                  <span className="text-black text-sm lg:text-base">John</span>
                </div>
                <ChevronDown className="text-[#A0A0A0] w-5" />
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                setState("loading");

                setTimeout(() => {
                  setState("done");
                  setTimeout(() => setState("idle"), 1500);
                }, 2000)
              }}
              className={`px-6 md:px-8 lg:px-12 py-2 lg:py-3 rounded-3xl my-4 lg:my-7 
                        self-center transition-all duration-500
                        flex items-center justify-center gap-3 md:gap-4
                         ${state === "done"
                  ? "bg-[#058E00] shadow-[0_0_12px_rgba(5,142,0,0.6)]"
                  : "bg-black hover:scale-105"
                } 
                 ${state === "idle" ? "cursor-pointer" : "cursor-not-allowed"}`}>

              {state === "loading" ? (
                <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
              ) : state === "done" ? (
                <div className="w-5 h-5 rounded-full border-1 border-white bg-[#058E00] flex items-center justify-center">
                  <span><Check size={10} color={"white"} /></span>
                </div>
              ) : null}

              <span className={`font-normal text-xs sm:text-sm lg:text-base ${state === "done" ? "text-white" : "text-[#9F9F9F]"} `}>
                {state === "idle" && "Confirm and Send"}
                {state === "loading" && "Sending..."}
                {state === "done" && "Done"}
              </span>
            </button>

          </div>
        </div>
      </div>
    </motion.section >
  );
}