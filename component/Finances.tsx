import { ChevronDown } from "lucide-react";

export default function Finances() {
  return (
    <section className="flex flex-col items-center space-y-10 py-16 sm:py-20 px-2 md:px-8 lg:px-12 overflow-hidden">

      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
        <div className="flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#bebebe]/40">
          <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#058E00] ring-2 ring-[#2dd327] animate-ping"></div>
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
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 w-full max-w-6xl">

        {/* Left Text Block */}
        <div className="flex flex-col items-start space-y-4 md:space-y-6 text-start md:text-left w-full md:w-1/2">
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
        <div className="flex items-center justify-center bg-[#F6F6F6] rounded-3xl w-full max-w-[25rem] md:max-w-[28rem] aspect-[3/3] sm:aspect-[3/4] p-3 sm:p-4 md:p-6 mx-auto">

          {/* Inner Card */}

          <div className="bg-white rounded-3xl w-full h-full flex flex-col justify-end px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-8">
            {/* Amount Section */}
            <div>
              <p className="font-medium text-base sm:text-lg md:text-xl">Amount</p>
              <p className="font-medium text-xs pt-3 sm:pt-4 text-[#9F9F9F]">Send Money</p>

              <div className="bg-[#F6F6F6] rounded-2xl mt-2 flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3">
                <div className="flex flex-col items-start">
                  <span className="font-normal text-sm md:text-base">$4,289</span>
                  <span className="font-normal text-[10px] md:text-xs text-[#9F9F9F]">Balance $16,200.00</span>
                </div>

                <div className="bg-white rounded-2xl flex items-center justify-evenly gap-2 p-1.5 shadow-sm">
                  <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#003282]" />
                  <span className="font-normal text-[10px] md:text-xs">USD</span>
                  <ChevronDown size={12} />
                </div>
              </div>
            </div>

            {/* Receiver Section */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <p className="font-medium text-xs text-[#9F9F9F]">
                Who are you sending your money to?
              </p>

              <div className="bg-[#F6F6F6] rounded-2xl mt-2 flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3">
                <div className="flex items-center gap-1 md:gap-3">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#c31574] flex justify-center items-center text-white text-xs sm:text-sm md:text-base">
                    J
                  </span>
                  <span className="text-black text-sm md:text-base">John</span>
                </div>
                <ChevronDown size={20} className="text-[#A0A0A0]" />
              </div>
            </div>

            {/* CTA Button */}
            <div className="bg-black translate-y-3 px-6 sm:px-10 lg:px-12 py-1 md:py-3 rounded-3xl my-2 md:my-4 lg:my-7 self-center cursor-pointer hover:scale-105 transition-all">
              <span className="font-normal text-xs sm:text-sm lg:text-base text-[#9F9F9F]">
                Confirm and Send
              </span>
            </div>

          </div>
        </div>
      </div>
    </section >
  );
}