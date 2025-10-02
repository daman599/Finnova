import { ArrowDown, ChevronDown, Headphones, Bell } from "lucide-react";
import Image from "next/image";

interface iconsType {
    icon: React.ComponentType<{ color: string, size: number }>;
    color: string;
}

const Icons: iconsType[] = [
    { icon: Headphones, color: "#F5F5F5" },
    { icon: Bell, color: "#F5F5F5" },
];

const Features: string[] = ["Overview", "Accounts", "Payments", "Cards"];

interface cardType {
    name: string;
    bg_color?: string;
}

const Cards: cardType[] = [
    { name: "My Cards", bg_color: "white" },
    { name: "All Cards" },
];

export default function Hero() {
    return (
        <section className="bg-black relative max-w-7xl w-full min-h-[100vh] flex flex-col items-center justify-center my-10 md:my-20 mx-auto rounded-4xl overflow-hidden z-20 p-4">

            <div className="absolute inset-0 bg-grid" />

            <div className="flex flex-col items-center justify-center space-y-3 md:space-y-6 z-20">

                <h1 className="font-normal text-4xl md:text-7xl lg:text-8xl text-center max-w-2xl py-2 mt-7
                           bg-gradient-to-r from-[#FFFFFF] via-[#999999] to-[#999999] bg-clip-text text-transparent"
                >Your money is where you are</h1>

                <p className="font-medium text-xs sm:text-base md:text-xl text-[#7A7A7A] text-center max-w-xl">Spend,save and manage your money, all in one place. Open a full
                    bank account fro your phone, for free.</p>

                <div className="flex items-center justify-center rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#bebebe]/40  w-fit p-3 sm:p-4 my-2 cursor-pointer">
                    <p className="text-xs sm:text-sm md:text-base font-medium text-black">Open Finnova account</p>
                </div>
            </div>

            <div className="relative w-full p-2 mt-10 md:mt-14">
                {/* block*/}
                <div className="relative max-w-5xl px-5 h-full mx-auto flex flex-col md:flex-row rounded-t-4xl bg-gradient-to-tl from-black to-[#143803] z-20">

                    <div className="hidden px-7 pt-5 lg:flex flex-col items-start">

                        <p className="font-normal text-white text-xl">Finnova</p>
                        <div className="pt-8 flex flex-col items-start space-y-2">
                            {Features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-1 lg:gap-2">
                                    <ChevronDown size={12} color={"#7A7A7A"} />
                                    <p className="font-normal text-base text-[#7A7A7A]">{feature}</p>
                                </div>
                            ))
                            }
                        </div>
                    </div>

                    <div className="hidden lg:block w-0.5 h-80 mx-4 md:mx-8 bg-gradient-to-t from-black via-[#2c2d2c] to-[#143803] "></div>

                    <div className="pt-5 flex flex-col space-y-5 w-full">
                        <div className="flex justify-between gap-10 items-center">

                            <p className="font-normal text-white text-base sm:text-lg md:text-xl">Cards</p>

                            <div className="flex items-center justify-between gap-1 sm:gap-2 md:gap-4 ">
                                <div className="hidden sm:flex items-center justify-between  gap-1 sm:gap-2 md:gap-4">
                                    {Icons.map((obj, i) => {
                                        const Icon = obj.icon;
                                        return (
                                            <div key={i} className="relative w-fit h-fit bg-[#232323] rounded-full p-1.5">
                                                <Icon color={obj.color} size={12} />
                                                {i == 1 && <div className="absolute top-0 right-0 block  ring-2 ring-[#232323]  z-10 w-2 h-2 rounded-full bg-[#1f968e]"></div>}
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="flex items-center w-fit rounded-xl px-3 py-1 gap-1 sm:gap-2 bg-[#232323]">
                                    <p className=" text-[#F5F5F5] font-normal text-[10px] sm:text-xs">John Smith</p>
                                    <ChevronDown size={15} color={"#F5F5F5"} />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            {Cards.map((card, i) => (
                                <div key={i} className={`${card.bg_color && "bg-white"} w-fit rounded-full px-2 md:px-3 py-1 md:py-2`}>
                                    <p className="text-[#7A7A7A] font-medium text-xs md:text-sm">{card.name}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col space-y-5 md:flex-row justify-between gap-3 ">

                            <div className="bg-[#0D0C0C] rounded-2xl w-full sm:w-fit max-w-4xl h-fit px-4 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 flex flex-col">
                                {/* Top Bar */}
                                <div className="flex justify-between items-center gap-3">
                                    <p className="font-medium text-xs sm:text-sm md:text-base text-[#7A7A7A]">My Cards</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-1 md:w-5 md:h-1 rounded-full bg-white"></div>
                                        <div className="w-1 h-1 rounded-full bg-[#535353]"></div>
                                        <div className="w-1 h-1 rounded-full bg-[#535353]"></div>

                                        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#395828]">
                                            <p className="font-bold text-sm md:text-base">+</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Inner small card */}
                                <div className="flex items-center gap-3 py-5 lg:py-7">
                                    <Image
                                        src={"/small-card.svg"}
                                        width={70}
                                        height={46}
                                        alt={"card"}
                                    />

                                    <div className="flex justify-between gap-6 sm:gap-10 md:gap-12">
                                        <div className="flex flex-col px-2">
                                            <p className="font-normal text-[10px] md:text-xs text-[#AFAFA7]">$1,000.908 USD</p>

                                            <div className="text-[#C1C1C1] flex items-center justify-center gap-1">
                                                {[1, 2, 3, 4].map((num, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#C1C1C1]"
                                                    />
                                                ))}
                                                {[6, 7, 3, 5].map((num, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs sm:text-sm md:text-base"
                                                    >
                                                        {num}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col max-w-4xl space-y-3 md:space-y-5 lg:space-y-6 ">
                                <span className="font-medium text-sm sm:text-base md:text-lg lg:text-xl text-[#F5F5F5]">Card Balance (USD)</span>
                                <span className="font-normal text-xl sm:text-xl md:text-2xl lg:text-3xl text-[#C6C6C6]">$6,950</span>

                                <div className="flex justify-between gap-10 md:gap-8 items-center">
                                    <p className="text-nomral text-[10px] md:text-xs text-[#353434]">Balance  Details</p>
                                    <div className="flex items-center justify-center gap-2 bg-[#232323] px-2 md:px-3 py-1 rounded-full w-fit ">
                                        <p className="text-[#AFAFA7] font-normal text-[10px] md:text-xs">Today</p>
                                        <ChevronDown size={12} color={"#AFAFA7"} />
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-col  gap-3 md:gap-6 ">

                                <div className="flex justify-between items-center gap-16">
                                    <p className="font-medium text-sm sm:text-base md:text-xl text-[#F5F5F5]">Statistics</p>

                                    <div className="flex items-center justify-center gap-2 bg-[#232323] px-3 py-1 rounded-full w-fit ">
                                        <span className="text-[#AFAFA7] font-normal text-xs">Week</span>
                                        <ChevronDown size={13} color={"#AFAFA7"} />
                                    </div>
                                </div>

                                <div className="flex items-center justify-center pt-3">
                                    <div className="w-28 h-28 lg:w-36 lg:h-36 bg-gradient-to-t from-black via-black/30 to-[#a5229c] rounded-full flex items-center justify-center">
                                        <div className="w-20 h-20 lg:w-28 lg:h-28 bg-black rounded-full flex items-center justify-center">
                                            <div className="w-18 h-18 lg:w-26 lg:h-26 bg-gradient-to-t from-black via-black/30 to-[#01248b] rounded-full flex items-center justify-center">
                                                <div className="w-12 h-12 lg:w-20 lg:h-20 bg-black rounded-full flex items-center justify-center">
                                                    <div className="w-10 h-10 lg:w-18 lg:h-18 bg-gradient-to-t from-black via-black/30 to-[#5a7d00] flex items-center justify-center rounded-full">
                                                        <div className="w-2 h-2 lg:w-8 lg:h-8 bg-black rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                {/* scroll indicator*/}
                <div className=" bottom-2 md:bottom-6 left-4 md:left-2.5 flex items-center gap-1 md:gap-2 z-10 ">
                    <div className="bg-white rounded-full p-0.5 md:p-1">
                        <ArrowDown className="text-black animate-bounce" />
                    </div>
                    <span className="text-white text-xs font-medium">Scroll</span>
                </div>
            </div >

        </section >
    );
}