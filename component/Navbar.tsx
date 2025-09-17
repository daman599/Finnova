import { Inria_Serif } from "next/font/google";
import { ChevronDown } from 'lucide-react';

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["700"],
  style: "normal",
});

export default function Navbar() {
  return (
    <nav className="px-6 sm:px-10 md:px-14 lg:px-16 mt-[9px] h-[48px] bg-white flex justify-between text-black">
      <div className="hidden md:flex items-center justify-center gap-5 py-[11px]">
        {["Personal", "Business", "Company"].map((item, index) => (
          <button
            key={index}
            className="relative w-[83px] h-[26px] gap-1 rounded-xl hover:bg-[#CCCCCC] font-medium text-[12px] text-[#7A7A7A] flex items-center justify-center">
            {item}
            <ChevronDown color="#c6c6c6" size={15} />
          </button>
        ))
        }
      </div>

      <div className={`flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl ${inriaSerif.className}`}>
        Finnova
      </div>

      <div className="flex gap-6 items-center justify-center">
        {["Help", "Blog", "En"].map((item, index) => (
          <div key={index}
            className="hidden md:flex items-center justify-center font-bold text-[12px] text-[#535353]">
            {item}
            {index == 2 && <ChevronDown size={12} color="#535353" />}
          </div>
        ))
        }
        <div className="flex items-center justify-center rounded-2xl w-[65px] h-[26px] hover:w-[66px] hover:h-[28px] cursor-pointer font-medium text-[12px] bg-black text-white">
          Log in
        </div>
      </div>
    </nav>
  );
}