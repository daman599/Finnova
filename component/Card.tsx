import { Dot } from "lucide-react";

export default function Card() {
    return (
        <div className="relative">
            <div className="absolute left-44 top-40 flex-col max-w-2xl px-6 md:px-12 lg:px-20 py-20">

                <div className="flex items-center justify-center font-medium text-sm text-[#058E00] p-1 rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#058E00]/40 mb-6 w-fit">
                    <Dot size={30} className="animate-ping" />
                    <p className="pr-3">Finnova Card</p>
                </div>

                <p className="text-start font-semibold text-2xl sm:text-3xl md:text-5xl">
                    Enhancing your financial experience
                </p>

                <p className="text-[#9F9F9F] max-w-96 font-medium text-xs sm:text-sm md:text-base mt-4">
                    Discover the range of benefits and features that make our card stand out.
                </p>

                <div className="bg-black w-fit px-2 py-1 rounded-2xl mt-3">
                    <p className=" font-medium text-xs text-[#9F9F9F]">Get my card</p>
                </div>

            </div>
        </div>
    );
}