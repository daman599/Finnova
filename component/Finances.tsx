import { Dot } from "lucide-react";

export default function Finances() {
  return (
    <div className="flex flex-col items-center">
      
      <div className="flex items-center justify-center
                      font-medium text-base text-[#058E00] 
                      pr-4.5 rounded-full
                      backdrop-blur-md bg-white
                      shadow-lg shadow-[#058E00]/30
                      mb-6">
        <Dot size={50} className="animate-pulse" />
        <p>Daily Finances</p>
      </div>

      <p className="font-semibold text-5xl text-center px-[355px]">
        Efficiency at its best: Finnova's daily finances
      </p>

      <p className="font-medium text-base text-center mt-5 text-[#A0A0A0]">
        Empowering global financial management.
      </p>
    </div>
  );
}
