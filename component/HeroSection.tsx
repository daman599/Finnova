import { ArrowDown, ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <>
            <div className="bg-black w-[1330px] h-[871px] flex flex-col items-center justify-center my-20 mx-auto rounded-4xl overflow-hidden z-20">

                <div className="w-full h-full relative "
                    style={{
                        backgroundImage: `linear-gradient(to right,rgba(255,255,255,0.07)  1px, transparent 1px),
                         linear-gradient(to bottom, rgba(255,255,255,0.07)  1px, transparent 1px)`,
                        backgroundSize: '95px 95px'
                    }}>

                    <div className="flex flex-col items-center justify-center space-y-6 py-4">
                        <p className="font-normal text-8xl text-center max-w-2xl py-2 mt-7
                           bg-gradient-to-r from-[#FFFFFF] via-[#999999] to-[#999999] bg-clip-text text-transparent"
                        >Your money is where you are</p>
                        <p className="font-medium text-xl text-[#7A7A7A] text-center max-w-xl">Spend,save and manage your money, all in one place. Open a full
                            bank account fro your phone, for free.</p>

                        <div className="flex items-center justify-center font-medium text-sm rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#bebebe]/40  w-fit p-4 my-2">
                            <p className="text-base font-medium text-black">Open Finnova account</p>
                        </div>
                    </div>

                    <div className="w-[1112px] h-fit mt-8 flex rounded-t-4xl bg-gradient-to-tl mx-auto from-black to-[#18320a] pb-0.5">
                        <div className="px-10 py-5">
                            <p className="font-normal text-white text-xl">Finnova</p>
                            <div className="pt-8 flex flex-col  space-y-2">
                                {["Overview", "Accounts", "Payments", "Cards"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 font-normal text-xl text-[#7A7A7A]">
                                        <ChevronDown />
                                        <p>{feature}</p>
                                    </div>
                                ))
                                }
                            </div>
                        </div>

                        <div className="w-0.5 h-80 bg-[#7A7A7A] mx-16"></div>
                    </div>


                    <div className="absolute bottom-6 left-6 flex items-center gap-2">
                        <div className="bg-white rounded-full p-1">
                            <ArrowDown color="black" className="animate-bounce" />
                        </div>
                        <p className="text-white font-medium text-xs">Scroll</p>
                    </div>

                </div>
            </div>
        </>
    );
}