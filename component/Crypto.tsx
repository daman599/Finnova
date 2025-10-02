import { Bitcoin, DollarSign, HandCoins } from "lucide-react";

export default function Crypto() {
    return (
        <div className="flex items-center justify-between px-2 md:px-8 lg:px-20 py-20 gap-6">

            <div className="flex flex-col space-y-4 w-full md:max-w-xl items-start justify-center">

                <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#058E00]/40 w-fit">
                    <div className="w-1 h-1 rounded-full bg-[#058E00] ring-1 ring-[#2dd327] animate-ping
                    shadow-background "></div>
                    <p className="font-medium text-xs md:text-sm text-[#058E00]">Cryptocurrency</p>
                </div>

                <div className="flex flex-col items-start justify-center space-y-3 md:space-y-5">

                    <p className=" lg:leading-13 font-semibold text-2xl sm:text-3xl lg:text-5xl">
                        Join the crypto revolution with Finnova
                    </p>

                    <p className="text-[#9F9F9F] w-full sm:max-w-96 font-medium text-xs sm:text-sm md:text-base ">
                        Invest in the future: safe and profitable crypto assets for everyone.
                    </p>

                    <div className="bg-black w-fit px-3 py-1 rounded-2xl ">
                        <p className="font-medium text-xs text-[#9F9F9F]">Get started</p>
                    </div>
                </div>
            </div>

            <div className="hidden sm:flex flex-col w-full h-full">
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