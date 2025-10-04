import Image from "next/image";

export default function Card() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center px-2 py-20 gap-4 ">

            <div className="flex flex-col space-y-4 w-full md:max-w-xl items-start justify-center ">
                <div className="flex items-center justify-center gap-3 px-5 py-2 rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#058E00]/40 w-fit">
                    <span className="w-1 h-1 rounded-full bg-[#058E00] ring-1 ring-[#2dd327] animate-ping
                    shadow-background "></span>
                    <span className="font-medium text-xs md:text-sm text-[#058E00]">Finnova Card</span>
                </div>

                <div className="flex flex-col items-start justify-center space-y-3 md:space-y-5">
                    <p className="lg:leading-13 font-semibold text-2xl sm:text-3xl lg:text-5xl">
                        Enhancing Your Financial Experience
                    </p>

                    <p className="text-[#9F9F9F] w-full sm:max-w-96 font-medium text-xs sm:text-sm md:text-base ">
                        Discover the range of benefits and features that make our card stand out.
                    </p>

                    <div className="bg-black w-fit px-3 py-1 flex items-center justify-center rounded-2xl ">
                        <span className="font-medium text-xs text-[#9F9F9F]">Get my card</span>
                    </div>
                </div>
            </div>

            <div className="relative py-2 ">
                <Image
                    src="/hand.svg"
                    alt="hand holding card"
                    width={450}
                    height={450}
                    className="w-72 sm:w-80 md:w-[26rem] lg:w-[30rem] h-full"
                />

                <Image
                    src="/card.svg"
                    alt="card"
                    width={210}
                    height={210}
                    className="absolute w-24 md:w-27 lg:w-36 top-28 left-20 md:top-23 md:left-14 lg:top-31 lg:left-20 h-auto"
                />
            </div>
        </div>
    );
}