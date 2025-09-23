import { Dot } from "lucide-react";
import Image from "next/image";

export default function Card() {
    return (
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-20">
            {/* Left text content */}
            <div className="flex flex-col max-w-xl pl-24">
                <div className="flex items-center font-medium text-sm text-[#058E00] p-1 rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#058E00]/40 mb-6 w-fit">
                    <Dot size={30} className="animate-ping" />
                    <p className="pr-3">Finnova Card</p>
                </div>

                <p className="text-start leading-13 font-semibold text-2xl sm:text-3xl md:text-5xl">
                    Enhancing Your Financial Experience
                </p>

                <p className="text-[#9F9F9F] max-w-96 font-medium text-xs sm:text-sm md:text-base mt-4">
                    Discover the range of benefits and features that make our card stand out.
                </p>

                <div className="bg-black w-fit px-3 py-1 rounded-2xl mt-3">
                    <p className="font-medium text-xs text-[#9F9F9F]">Get my card</p>
                </div>
            </div>

            <div className="flex-shrink-0 pr-28 py-8 relative">
                <Image
                    src={"/hand.svg"}
                    alt="hand holding card"
                    width={450}
                    height={450}
                />

                <Image
                    src={"/card.svg"}
                    alt="card"
                    width={210}
                    height={210}
                    className="absolute top-43 left-22 "
                />
            </div>
        </div>
    );
}