"use client"

import { ArrowRightCircle } from "lucide-react";
import { FaGoogle, FaApple, FaServer } from "react-icons/fa"
import { motion } from "motion/react";

interface IconItem {
  label: string;
  icon: React.ComponentType<{ color?: string; className: string }>;
  color: string;
}

const Icons: IconItem[] = [
  { label: "Apple Pay", icon: FaApple, color: "#ffffff" },
  { label: "Google Pay", icon: FaGoogle, color: "#4285F4" },
  { label: "Easy access", icon: FaServer, color: "#22C55E" },
];


export default function CardFeatures() {
  return (
    <section className="bg-black relative max-w-7xl w-full min-h-[100vh]
     flex flex-col items-center my-10 md:my-20 mx-auto rounded-4xl overflow-hidden p-4">

      <div className="absolute inset-0 bg-grid" />

      <div className="flex flex-col items-center space-y-4 md:space-y-2 px-2 z-10">
        <div className="bg-[#262424] border-t-1 border-opacity-20 border-[#9F9F9F] w-fit rounded-t-[#FFFFFF] my-3 sm:my-6 flex items-center gap-2 justify-center py-2 px-3 rounded-xl">
          <span className="w-1 h-1 bg-[#22C55E] rounded-full animate-pulse"></span>
          <span className="text-[#22C55E] font-medium text-xs md:text-sm">Card Features</span>
        </div>

        <p className="text-white text-center font-normal max-w-2xl w-full text-xl sm:text-2xl md:text-3xl lg:text-5xl">Unlocking the power of your Finnova Card</p>
        <p className="text-normal text-center md:w-md lg:w-full text-xs md:py-1 sm:text-sm md:text-base text-[#9F9F9F]">Discover the functions that make your card more than just payment.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center z-20 justify-center gap-5 lg:gap-6 mt-8 lg:mt-20 px-3 lg:px-10 py-2">
        {Icons.map((obj, i) => {
          const Icon = obj.icon;

          return (
            <div key={i}
              className="max-w-sm max-h-[26rem] flex flex-col items-start border-l-2 border-t-2
               border-[#395828] shadow-[0_0_12px_#395828] px-4 md:px-5 lg:px-8 py-4 md:py-5 lg:py-10 bg-[#1E1E1E] rounded-4xl ">

              <Icon color={obj.color} className="w-6 h-6 lg:w-8 lg:h-8" />
              <p className="py-3 text-medium text-base sm:text-lg md:text-xl lg:text-2xl text-white">{obj.label}</p>
              <p className="text-normal text-xs lg:text-sm text-[#9F9F9F]">Experience convenience & satisfaction in every transaction.
                Discover how our new card transforms the way you manage your money.</p>

              <div className="bg-black mt-6 w-fit flex items-center justify-center gap-2 lg:gap-4 rounded-4xl px-3 lg:px-6 py-1 lg:py-2">
                <span className="text-white text-normal text-xs lg:text-base">Learn more</span>

                <motion.div
                  whileHover={{
                    scaleX: 1.3,
                    boxShadow: "0 0 10px 4px #395828",
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  className="bg-white rounded-full cursor-pointer"
                >
                  <ArrowRightCircle />
                </motion.div>

              </div>
            </div>
          );
        })}

      </div>

    </section >
  );
}