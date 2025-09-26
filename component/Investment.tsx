import { Dot } from "lucide-react";
import Image from "next/image";
import { US, EU, JP } from "country-flag-icons/react/3x2";

export default function Investment() {
  return (
    <div className="relative flex flex-col items-center mt-20">

      <div className="flex items-center justify-center font-medium text-sm text-[#058E00] p-1 rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#bebebe]/40 mb-6 w-fit">
        <Dot size={30} className="animate-pulse" />
        <p className="pr-3">Investments</p>
      </div>

      <p className="font-semibold text-5xl text-center px-[355px]">
        Spend, save and manage your money, all in one place.
      </p>

      <p className="font-medium text-base text-center mt-5 text-[#A0A0A0]">
        Open a full bank account from your phone, for free.
      </p>


      <div className="my-14 flex gap-12">
        <div className="bg-[#F6F6F6] w-[451px] h-[636px] rounded-4xl px-6 py-7">
          <p className="font-semibold text-2xl">Security that never sleeps</p>
          <p className="text-[#A0A0A0] font-medium text-base py-3 pr-3">Experience the freedom of hassle free modern transactions and say
            goodbye to unnecessary fears and enjoy seamless transactions.</p>

          <div className="bg-black w-fit rounded-2xl px-3 py-1 my-2">
            <p className="font-medium text-xs text-[#9F9F9F]">Explore security</p>
          </div>

          <div className="relative">
            <Image
              src={"/black-card.svg"}
              width={250}
              height={100}
              alt={"card"}
              className="absolute top-16 left-2 "
            />

            <Image
              src={"/green-card.svg"}
              width={232}
              height={100}
              alt={"card"}
              className="absolute top-32 left-40 "
            />

          </div>

        </div>

        <div className="bg-[#F6F6F6] w-[451px] h-[636px] rounded-4xl px-6 py-7">
          <p className="font-semibold text-2xl">Free global transfers</p>
          <p className="text-[#A0A0A0] font-medium text-base py-3 pr-3">Experience the freedom of hassle free modern transactions and say
            goodbye to unnecessary fears and enjoy seamless transactions.</p>

          <div className="bg-black w-fit rounded-2xl px-3 py-1 my-2">
            <p className="font-medium text-xs text-[#9F9F9F]">Explore transfers</p>
          </div>

          <div className="relative flex flex-col items-center mt-8">
            {/* Japan Card */}
            <div className="bg-white rounded-4xl flex px-6 py-2 shadow-lg shadow-[#A0A0A0] w-fit h-fit relative z-20 ">
              <JP className="w-9 h-9 " />
              <div className="flex justify-between gap-24">
                <div className="flex flex-col px-4">
                  <p className="font-medium text-base">Japanese Yen</p>
                  <p className="font-normal text-xs text-[#B5B5B5]">JPY</p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="font-medium text-xs">+¥1500.00</p>
                </div>
              </div>
            </div>

            {/* USD Card */}
            <div className="bg-white rounded-4xl flex px-6 py-2 shadow-lg shadow-[#A0A0A0] w-fit h-fit -mt-3 relative z-10">
              <US className="w-9 h-9 " />
              <div className="flex justify-between gap-24">
                <div className="flex flex-col px-4">
                  <p className="font-medium text-base">US Dollar</p>
                  <p className="font-normal text-xs text-[#B5B5B5]">USD</p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="font-medium text-xs">+$290.99</p>
                </div>
              </div>
            </div>

            {/* Euro Card */}
            <div className="bg-white rounded-4xl flex px-6 py-2 shadow-lg shadow-[#A0A0A0] w-fit h-fit -mt-5 relative z-5">
              <EU className="w-9 h-9 " />
              <div className="flex justify-between gap-24">
                <div className="flex flex-col px-4">
                  <p className="font-medium text-base">Euro</p>
                  <p className="font-normal text-xs text-[#B5B5B5]">EUR</p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="font-medium text-xs">-€20.99</p>
                </div>
              </div>
            </div>

          </div>


          <div className="relative">
            <Image
              src={"/earth.svg"}
              width={500}
              height={100}
              alt={"earth"}
              className="absolute top-22"
            />

          </div>
        </div>

      </div>

    </div>
  );
}