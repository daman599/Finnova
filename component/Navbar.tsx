import { Inria_Serif } from "next/font/google";
import { ChevronDown } from "lucide-react";

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["700"],
  style: "normal",
});

export default function Navbar() {

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/30 backdrop-blur-md text-black px-1 lg:px-13 py-0.5 flex justify-between items-center">
      <div className="hidden md:flex items-center gap-1 lg:gap-3">
        {["Personal", "Business", "Company"].map((item, index) => (
          <button
            key={index}
            className="px-1 md:px-3 py-0.5 md:py-1 rounded-xl hover:bg-gray-200 font-medium text-[12px] text-gray-600 flex items-center gap-0.5 md:gap-1"
          >
            {item}
            <ChevronDown size={14} className="text-gray-400" />
          </button>
        ))}
      </div>

      <div
        className={`text-2xl md:text-3xl lg:text-4xl font-bold flex-1 text-center ${inriaSerif.className}`}
      >
        Finnova
      </div>

      <div className="hidden md:flex items-center gap-4 md:gap-6">
        {["Help", "Blog", "En"].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-0.5 md:gap-1 font-semibold text-[12px] text-gray-700 cursor-pointer"
          >
            {item}
            {index === 2 && <ChevronDown size={12} className="text-gray-600" />}
          </div>
        ))}

        <div className="px-2 md:px-4 py-0.5 md:py-1 rounded-2xl bg-black text-white text-[12px] font-medium cursor-pointer hover:scale-105 transition">
          Log in
        </div>
      </div>
    </nav>
  );
}