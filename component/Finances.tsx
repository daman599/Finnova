import { Dot, ChevronDown } from "lucide-react";

export default function Finances() {
  return (
    <div className="relative flex flex-col items-center mt-20">

      <div className="flex items-center justify-center font-medium text-sm text-[#058E00] p-1 rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#bebebe]/40 mb-6 w-fit">
        <Dot size={30} className="animate-pulse" />
        <p className="pr-3">Daily Finances</p>
      </div>

      <p className="font-semibold text-5xl text-center px-[355px]">
        Efficiency at its best: Finnova's daily finances
      </p>

      <p className="font-medium text-base text-center mt-5 text-[#A0A0A0]">
        Empowering global financial management.
      </p>

      <div className="flex">
        <div className="absolute left-20 top-96 flex-col max-w-xl px-6 md:px-12 lg:px-20 py-20">

          <div className="flex items-center justify-center font-medium text-sm text-[#058E00] p-1 rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#058E00]/40 mb-6 w-fit">
            <Dot size={30} className="animate-pulse" />
            <p className="pr-3">Account Transfer</p>
          </div>

          <p className="text-start font-medium text-2xl sm:text-3xl md:text-4xl">
            Global payments: your gateway to secure transactions
          </p>

          <p className="text-[#9F9F9F] font-medium text-xs sm:text-sm md:text-base mt-4">
            Finnova simplifying payments in Australia, Europe and internationally.
          </p>
        </div>

        <div className="bg-[#F6F6F6] rounded-4xl  h-[680px] w-[510px] mb-3 ml-[330px] mt-[85px] px-[56px] py-[74px]">

          <div className="bg-white rounded-3xl w-[400px] h-[520px] pl-9 ">
            <p className="font-medium text-xl pt-20">Amount</p>
            <p className="font-medium text-xs pt-7 text-[#9F9F9F] ">Send Money</p>

            <div className="bg-[#F6F6F6] max-w-[325px] max-h-[65px] rounded-2xl mt-2 flex gap-24">

              <div className="pl-3 py-3">
                <p className="font-normal text-base">$4,289</p>
                <p className="font-normal text-xs text-[#9F9F9F]">Balance $16,200.00</p>
              </div>

              <div className="bg-white rounded-2xl w-[89px] h-[37px] my-4 flex items-center gap-2 py-2.5 px-1.5">
                <div className="w-5 h-5 rounded-full bg-[#003282]"></div>
                <p className="font-normal text-xs">USD</p>
                <ChevronDown size={15} />
              </div>

            </div>

            <p className="font-medium text-xs pt-10 text-[#9F9F9F] ">Who are you sending your money to?</p>

            <div className="bg-[#F6F6F6] max-w-[325px] max-h-[65px] rounded-2xl mt-2 flex gap-40">

              <div className="p-3 flex items-center justify-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#c31574] flex justify-center text-base text-white items-center">J</div>
                <p>John</p>
              </div>

              <div className="flex items-center justify-center">
                <ChevronDown size={30} className="text-[#A0A0A0]" />
              </div>
            </div>

            <div className="bg-black h-[45px] w-[260px] rounded-3xl flex items-center justify-center mt-16 mx-8 cursor-pointer">
              <p className="font-normal text-base text-[#9F9F9F]">Confirm and Send</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
