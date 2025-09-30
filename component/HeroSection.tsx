import { ArrowDown, ChevronDown, Triangle, Headphones, Bell } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-black max-w-7xl w-full min-h-[90vh] flex flex-col items-center justify-center my-20 mx-auto rounded-4xl overflow-hidden z-20 px-2">

            <div className="absolute inset-0 bg-grid" />

            <div className="flex flex-col items-center justify-center space-y-3 md:space-y-6">

                <h1 className="font-normal text-5xl md:text-7xl lg:text-8xl text-center max-w-2xl py-2 mt-7
                           bg-gradient-to-r from-[#FFFFFF] via-[#999999] to-[#999999] bg-clip-text text-transparent"
                >Your money is where you are</h1>

                <p className="font-medium text-sm sm:text-base md:text-xl text-[#7A7A7A] text-center max-w-xl">Spend,save and manage your money, all in one place. Open a full
                    bank account fro your phone, for free.</p>

                <div className="flex items-center justify-center rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#bebebe]/40  w-fit p-3 sm:p-4 my-2">
                    <p className="text-xs sm:text-sm md:text-base font-medium text-black">Open Finnova account</p>
                </div>
            </div>

            <div className="w-[1112px] h-fit mt-14 flex rounded-t-4xl bg-gradient-to-tl mx-auto from-black to-[#143803] pb-0.5 z-20 ">
                <div className="px-10 py-5">
                    <p className="font-normal text-white text-xl">Finnova</p>
                    <div className="pt-8 flex flex-col space-y-2">
                        {["Overview", "Accounts", "Payments", "Cards"].map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 font-normal text-xl text-[#7A7A7A]">
                                <ChevronDown />
                                <p>{feature}</p>
                            </div>
                        ))
                        }
                    </div>
                </div>

                <div className="w-0.5 h-94 bg-[#202020] mx-12"></div>

                <div className="py-5">
                    <div className="flex justify-between">
                        <p className="font-normal text-white text-xl">Cards</p>
                        <div className="flex items-center gap-4">
                            <div className="bg-[#232323] w-fit h-fit rounded-full p-1">
                                <Headphones color={"#F5F5F5"} />
                            </div>
                            <div className="bg-[#232323] w-fit h-fit rounded-full p-1">
                                <Bell color={"#F5F5F5"} />
                            </div>
                            <div className="w-fit rounded-xl flex h-fit px-3 py-1 gap-2 text-[#F5F5F5] font-normal text-xs bg-[#232323]">
                                <p>John Smith</p>
                                <ChevronDown size={15} />
                            </div>
                        </div>
                    </div>

                    <div className="flex py-6">
                        <div className="bg-white w-fit rounded-full px-3 py-2">
                            <p className="text-[#7A7A7A] font-medium text-sm">My Cards</p>
                        </div>

                        <div className=" w-fit rounded-full px-3 py-2">
                            <p className="text-[#7A7A7A] font-medium text-sm">All Cards</p>
                        </div>
                    </div>

                    <div className="flex gap-8 ">
                        <div className="bg-[#0D0C0C] rounded-2xl w-fit h-fit px-5 py-3">

                            <div className="flex gap-26">
                                <p className="font-medium text-sm text-[#7A7A7A]">My Cards</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-2 rounded-full bg-white"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#535353]"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#535353]"></div>

                                    <div className=" w-6 h-6 flex item-center justify-center rounded-full bg-[#395828]">
                                        <span className="font-bold text-base">+</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 pt-10 py-5">

                                <Image
                                    src={"/small-card.svg"}
                                    width={77}
                                    height={46}
                                    alt={"card"}
                                />

                                <div className="flex flex-col ">
                                    <p className="font-normal text-xs text-[#AFAFA7]">1,000.908 USD</p>
                                    <div className="text-[#C1C1C1] flex items-center justify-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-[#C1C1C1]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#C1C1C1]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#C1C1C1]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#C1C1C1]"></div>

                                        <span className="text-base">6</span>
                                        <span className="text-base">7</span>
                                        <span className="text-lg">3</span>
                                        <span className="text-xl">5</span>
                                    </div>
                                </div>

                                <div className="pl-10">
                                    <Triangle color={"white"} size={8} />
                                    <Triangle color={"white"} size={8} className="rotate-180" />
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col space-y-6 ">
                            <p className="font-medium text-xl text-[#F5F5F5]">Card Balance (USD)</p>
                            <p className="font-normal text-3xl text-[#C6C6C6]">$6,950</p>

                            <div className="flex gap-6 items-center">
                                <p className="text-nomral text-xs text-[#353434]">Balance  Details</p>
                                <div className="flex items-center justify-center gap-2 text-[#AFAFA7] font-normal text-xs bg-[#232323] px-3 py-1 rounded-xl w-fit ">
                                    <p>Today</p>
                                    <ChevronDown size={15} />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 ml-10">
                            <div className="flex gap-10">
                                <p className="font-medium text-xl text-[#F5F5F5]">Statistics</p>
                                <div className="w-fit rounded-xl flex h-fit px-3 py-1 gap-2 text-[#AFAFA7] font-normal text-xs bg-[#232323]">
                                    <p>Week</p>
                                    <ChevronDown size={15} />
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-3 py-3">
                                <div className="w-36 h-36 bg-gradient-to-t from-black via-black/30 to-[#a5229c] rounded-full flex items-center justify-center">
                                    <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center">
                                        <div className="w-26 h-26 bg-gradient-to-t from-black via-black/30 to-[#01248b] rounded-full flex items-center justify-center">
                                            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                                                <div className="w-18 h-18 bg-gradient-to-t from-black via-black/30 to-[#5a7d00] flex items-center justify-center rounded-full">
                                                    <div className="w-8 h-8 bg-black rounded-full"></div>
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

            <div className="absolute bottom-6 left-6 flex items-center gap-2 z-10">
                <div className="bg-white rounded-full p-1">
                    <ArrowDown className="text-black animate-bounce" />
                </div>
                <span className="text-white text-xs font-medium">Scroll</span>
            </div>

        </section >
    );
}