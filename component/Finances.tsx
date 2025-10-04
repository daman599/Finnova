import { ChevronDown } from "lucide-react";

export default function Finances() {
  return (
    <div className="flex flex-col items-center space-y-6 py-20 px-2">

      <div className="flex flex-col space-y-2 md:space-y-4 items-center justify-center pt-5">
        <div className="flex items-center justify-center px-4 gap-3 py-2 rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#bebebe]/40 w-fit">
          <div className="w-1 h-1 rounded-full bg-[#058E00] ring-2 ring-[#2dd327] animate-ping
                    shadow-background"></div>
          <span className="font-medium text-xs md:text-sm text-[#058E00]">Daily Finances</span>
        </div>

        <p className="font-semibold text-2xl lg:leading-13 sm:text-3xl lg:text-5xl text-center lg:max-w-3xl md:max-w-xl">
          Efficiency at its best: Finnova's daily finances
        </p>

        <p className="font-medium text-center text-xs sm:text-sm md:text-base text-[#A0A0A0]">
          Empowering global financial management.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-between items-baseline-last ">
        {/* Left block */}
        <div className="flex flex-col space-y-4 lg:max-w-xl py-5">
          <div className="flex items-center justify-center gap-3 px-3 sm:px-5 py-1 sm:py-2 rounded-full backdrop-blur-lg bg-white shadow-lg shadow-[#058E00]/40 w-fit">
            <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#058E00] shadow-[0_3px_3px_#058E00]"></div>
            <span className="font-medium text-[10px] sm:text-xs md:text-sm text-[#058E00]">Account Transfer</span>
          </div>

          <p className="text-start font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Global payments: your gateway to secure transactions
          </p>

          <p className="text-[#9F9F9F] font-medium text-xs sm:text-sm md:text-base max-w-sm">
            Finnova simplifying payments in Australia, Europe and internationally.
          </p>
        </div>

        {/* Right block */}
        <div className="bg-[#F6F6F6] relative items-center justify-center rounded-3xl h-[26rem] sm:h-[28rem] md:h-[36rem] lg:h-[40rem] w-[18rem] sm:w-[20rem] md:w-[28rem] lg:w-[32rem] mt-[85px] px-14 py-5">

          <div className="absolute left-2 md:left-8 lg:left-14 bottom-2 md:bottom-7 lg:bottom-8">
            <div className="bg-white flex flex-col justify-start rounded-3xl w-[17rem] md:w-[24rem] lg:w-[25rem] h-[20rem] md:h-[30rem] lg:h-[33rem] px-5 md:px-7 lg:px-9">

              <p className="font-medium text-base sm:text-lg md:text-xl pt-4 md:pt-14 lg:pt-20">Amount</p>
              <p className="font-medium text-xs pt-5 lg:pt-7 text-[#9F9F9F]">Send Money</p>

              <div className="bg-[#F6F6F6] max-w-[20rem] w-full rounded-2xl mt-2 flex items-center justify-between gap-10 sm:gap-24 px-3">

                <div className="flex flex-col items-start">
                  <span className="font-normal text-sm md:text-base">$4,289</span>
                  <span className="font-normal text-[10px] md:text-xs text-[#9F9F9F]">Balance $16,200.00</span>
                </div>

                <div className="bg-white rounded-2xl w-fit my-4 flex items-center justify-evenly gap-2 p-1.5">
                  <span className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#003282]"></span>
                  <span className="font-normal text-[10px] md:text-xs">USD</span>
                  <ChevronDown size={12} />
                </div>
              </div>

              <p className="font-medium text-xs pt-6 md:pt-10 text-[#9F9F9F]">Who are you sending your money to?</p>

              <div className="bg-[#F6F6F6] max-w-[20rem] w-full rounded-2xl mt-2 flex items-center justify-between p-3">
                <div className="flex items-center justify-center gap-3">
                  <span className="w-6 h-6 md:w-9 md:h-9 rounded-full bg-[#c31574] flex justify-center items-center text-sm md:text-base text-white">J</span>
                  <span className="text-black text-sm md:text-base">John</span>
                </div>

                <div className="flex items-center justify-center">
                  <ChevronDown size={20} className="text-[#A0A0A0]" />
                </div>
              </div>

              <div className="bg-black w-fit px-8 md:px-10 lg:px-16 py-3 rounded-3xl flex items-center justify-center mt-5 sm:mt-6 md:mt-14 lg:mt-16 mx-auto cursor-pointer">
                <span className="font-normal text-xs md:text-sm lg:text-base text-[#9F9F9F]">Confirm and Send</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}