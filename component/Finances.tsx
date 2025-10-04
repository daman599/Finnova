import { ChevronDown } from "lucide-react";

export default function Finances() {
  return (
    <div className="flex flex-col items-center py-20 px-4">

      <div className="flex flex-col space-y-2 md:space-y-4 items-center justify-center py-5">
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

      <div className="flex flex-col md:flex-row items-between items-baseline-last lg:px-20">
        <div className="flex flex-col space-y-4 md:max-w-xl px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-center gap-3 px-5 py-2 rounded-full backdrop-blur-lg bg-white shadow-lg shadow-[#058E00]/40 w-fit">
            <div className="w-2 h-2 rounded-full bg-[#058E00] shadow-[0_3px_3px_#058E00]"></div>
            <span className="font-medium text-xs md:text-sm text-[#058E00]">Account Transfer</span>
          </div>

          <p className="text-start font-medium text-2xl sm:text-3xl md:text-4xl">
            Global payments: your gateway to secure transactions
          </p>

          <p className="text-[#9F9F9F] font-medium text-xs sm:text-sm md:text-base max-w-sm">
            Finnova simplifying payments in Australia, Europe and internationally.
          </p>
        </div>

        <div className="bg-[#F6F6F6] rounded-4xl md:h-[32rem] lg:h-[40rem] md: md:w-[26rem] lg:w-[32rem] mt-[85px] px-14 py-[74px]">

          <div className="bg-white flex flex-col rounded-3xl w-[25rem] h-[33rem] px-9">

            <p className="font-medium text-base sm:text-lg md:text-xl pt-20">Amount</p>
            <p className="font-medium text-xs pt-7 text-[#9F9F9F]">Send Money</p>

            <div className="bg-[#F6F6F6] max-w-[20rem] rounded-2xl mt-2 flex items-between gap-24 px-3">

              <div className="flex flex-col items-start justify-center">
                <span className="font-normal text-sm md:text-base">$4,289</span>
                <span className="font-normal text-xs text-[#9F9F9F]">Balance $16,200.00</span>
              </div>

              <div className="bg-white rounded-2xl w-fit my-4 flex items-center justify-evenly gap-2 py-2.5 px-1.5">
                <span className="w-5 h-5 rounded-full bg-[#003282]"></span>
                <span className="font-normal text-xs">USD</span>
                <ChevronDown size={15} />
              </div>
            </div>

            <p className="font-medium text-xs pt-6 md:pt-10 text-[#9F9F9F] ">Who are you sending your money to?</p>

            <div className="bg-[#F6F6F6] max-w-[20rem] rounded-2xl mt-2 flex items-center justify-between p-3">
              <div className="flex items-center justify-center gap-3">
                <span className="w-6 h-6 md:w-9 md:h-9 rounded-full bg-[#c31574] flex justify-center items-center text-base text-white">J</span>
                <span>John</span>
              </div>

              <div className="flex items-center justify-center">
                <ChevronDown size={25} className="text-[#A0A0A0]" />
              </div>
            </div>

            <div className="bg-black w-fit px-10 sm:px-12 md:px-16 py-3 rounded-3xl flex items-center justify-center mt-12 md:mt-16 mx-8 cursor-pointer">
              <span className="font-normal text-xs sm:text-sm md:text-base text-[#9F9F9F]">Confirm and Send</span>
            </div>

          </div>

        </div>

      </div>
    </div >
  );
}
