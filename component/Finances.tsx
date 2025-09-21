import { Dot } from "lucide-react";

export default function Finances() {
  return (
    <div className="flex flex-col items-center mt-20">

      <div className="flex items-center justify-center
                      font-medium text-sm text-[#058E00] 
                      p-1 rounded-full
                      backdrop-blur-md bg-white
                      shadow-lg shadow-[#bebebe]/40
                      mb-6 w-fit">
        <Dot size={30} className="animate-pulse" />
        <p className="pr-3">Daily Finances</p>
      </div>

      <p className="font-semibold text-5xl text-center px-[355px]">
        Efficiency at its best: Finnova's daily finances
      </p>

      <p className="font-medium text-base text-center mt-5 text-[#A0A0A0]">
        Empowering global financial management.
      </p>
      
    <div className="flex flex-col max-w-2xl px-6 md:px-12 lg:px-20 py-20">
      
      <div className="flex items-center justify-center
                      font-medium text-sm text-[#058E00] 
                      p-1 rounded-full
                      backdrop-blur-md bg-white
                      shadow-lg shadow-[#058E00]/40
                      mb-6 w-fit">
        <Dot size={30} className="animate-pulse" />
        <p className="pr-3">Account Transfer</p>
      </div>
     

      {/* Heading */}
      <p className="text-start font-medium text-2xl sm:text-3xl md:text-4xl">
        Global payments: your gateway to secure transactions
      </p>

      {/* Description */}
      <p className="text-[#9F9F9F] text-sm sm:text-base md:text-lg mt-4">
        Finnova simplifying payments in Australia, Europe and internationally.
      </p>
        </div>

    </div>
  );
}
