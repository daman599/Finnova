import { Dot, ArrowRightCircle } from "lucide-react";
import { FaGoogle, FaApple, FaServer } from "react-icons/fa"

interface IconItem {
  label: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
}

const Icons: IconItem[] = [
  { label: "Apple Pay", icon: FaApple, color: "#ffffff" },
  { label: "Google Pay", icon: FaGoogle, color: "#4285F4" },
  { label: "Contactless access", icon: FaServer, color: "#22C55E" },
];


export default function CardFeatures() {
  return (
    <div className="bg-black w-[1300px] h-[756px] rounded-4xl my-30 mx-28 flex flex-col ">

      <div className="flex flex-col justify-center items-center gap-3">
        <div className="bg-[#262424] mt-14 border-t-1 border-opacity-20 border-[#9F9F9F] w-fit text-[#22C55E] rounded-t-[#FFFFFF] font-medium text-sm flex items-center justify-center py-2 px-3 rounded-xl">
          <Dot size={30} className="animate-pulse" />
          <p className="pr-3">Card Features</p>
        </div>

        <p className="text-white pt-2 text-center font-normal max-w-2xl text-5xl">Unlocking the power of your Finnova Card</p>
        <p className="pt-6 text-normal text-base text-[#9F9F9F]">Discover the functions that make your card more than just payment.</p>
      </div>

      <div className="mt-16 ml-28 flex gap-5">
        {Icons.map((obj, i) => {
          const Icon = obj.icon;

          return (
            <div key={i}
              className="w-[345px] h-[286px] flex flex-col border-l-2 border-t-2 border-[#395828] shadow-[0_0_12px_#395828] px-8 py-6 bg-[#1E1E1E] rounded-4xl ">

              <Icon size={48} color={obj.color} />
              <p className="py-3 text-medium text-2xl text-white">{obj.label}</p>
              <p className=" text-normal text-sm text-[#9F9F9F]">Experience convenience & satisfaction in every transaction.
                Discover how our new card transforms the way you manage your money.</p>

              <div className="bg-black mt-6 w-fit flex items-center justify-center gap-4 rounded-4xl px-6 py-2">
                <p className="text-white text-normal text-base">Learn more</p>
                <div className="bg-white rounded-full">
                  <ArrowRightCircle />
                </div>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}