import { Dot } from "lucide-react";
import Image from "next/image";

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

          <div className="relative">
            <Image
              src={"/earth.svg"}
              width={500}
              height={100}
              alt={"earth"}
              className="absolute top-62 "
            />

          </div>
        </div>

      </div>

    </div>
  );
}