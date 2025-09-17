import { Inria_Serif } from "next/font/google";
import { ChevronDown } from 'lucide-react';

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300"], 
  style: "italic",
});

export default function Navbar(){
    return (
           <div className="mx-[73px] mt-[9px] h-[48px] bg-white flex justify-between text-black">
             <div className="flex items-center justify-center gap-5 py-[11px]">
              <button className="relative w-[83px] h-[26px] gap-1 rounded-xl hover:bg-[#CCCCCC] font-medium text-[12px] text-[#7A7A7A] flex items-center justify-center">
                Personal 
                <ChevronDown color="#c6c6c6" size={15} />
              </button>

              <div className="relative  w-[83px] h-[26px] gap-1 rounded-xl hover:bg-[#CCCCCC] font-medium text-[12px] text-[#7A7A7A] flex items-center justify-center">
                Business
                <ChevronDown color="#c6c6c6" size={15}/>
              </div>

              <div className="w-[83px] h-[26px] gap-1 rounded-xl hover:bg-[#CCCCCC] font-medium text-[12px] text-[#7A7A7A] flex items-center justify-center">
                Company
                <ChevronDown color="#c6c6c6" size={15}/>
              </div>
            </div>

              <div className={`flex items-center justify-center text-[40px] ${inriaSerif}`}>
               Finnova
              </div>
            
            <div className="flex gap-6 items-center justify-center">
              <div className="flex items-center justify-center font-bold text-[12px] text-[#535353]">
                Help
              </div>

              <div className="flex items-center justify-center font-bold text-[12px] text-[#535353]">
                Blog
              </div>

              <div className="flex items-center justify-center gap-2 font-bold text-[12px] text-[#535353]">
                En <ChevronDown size={12} color="#535353"/> 
              </div>

              <div className="flex items-center justify-center rounded-2xl w-[65px] h-[26px] hover:w-[66px] hover:h-[28px] cursor-pointer font-medium text-[12px] bg-black text-white">
                Log in
              </div>
            </div>
           </div>
    );
}