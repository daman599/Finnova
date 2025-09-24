import { Dot, Bitcoin, DollarSign, HandCoins } from "lucide-react";

export default function Crypto() {
    return (
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-20 gap-6">
            <div className="flex flex-col max-w-xl pl-44 py-32">
                <div className="flex items-center font-medium text-sm text-[#058E00] p-1 rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#058E00]/40 mb-6 w-fit">
                    <Dot size={30} className="animate-pulse" />
                    <p className="pr-3">Cryptocurrency</p>
                </div>

                <p className="text-start leading-13 font-semibold text-2xl sm:text-3xl md:text-5xl">
                    Join the crypto revolution with Finnova
                </p>

                <p className="text-[#9F9F9F] max-w-96 font-medium text-xs sm:text-sm md:text-base mt-4">
                    Invest in the future: safe and profitable crypto assets for everyone.
                </p>

                <div className="bg-black w-fit px-3 py-1 rounded-2xl mt-3">
                    <p className="font-medium text-xs text-[#9F9F9F]">Get started</p>
                </div>
            </div>

            <div className="flex flex-col  w-full h-full">
                <div className="ml-50 w-40 h-40 rounded-full flex items-center justify-center [transform:rotateX(50deg)_rotateY(-50deg)] bg-[#FBBC05]">
                    <DollarSign size={70} color="white" />
                </div>

                <div className="ml-3 mt-12 w-50 h-50 rounded-full flex items-center justify-center [transform:rotateX(50deg)_rotateY(50deg)] bg-[#395828]">
                    <HandCoins size={90} color="white" />
                </div>

                <div className="ml-56 mt-8 w-50 h-50 rounded-full flex items-center justify-center [transform:rotateX(40deg)_rotateY(-40deg)]  bg-black">
                    <Bitcoin size={100} color="white" />
                </div>

            </div>

        </div>
    );
}