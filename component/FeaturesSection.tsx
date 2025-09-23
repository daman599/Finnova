import { US, EU } from "country-flag-icons/react/3x2";
import { ShoppingCart, Train } from "lucide-react";

export default function FeaturesSection() {
    return (
        <div className="flex items-center justify-center py-20 gap-8 ">

            <div className="bg-[#F6F6F6] w-[346px] h-[308px] rounded-4xl px-6 py-3">
                <p className=" py-2 text-center font-medium text-xl">Analytics</p>
                <p className="py-3 text-center font-medium text-base text-[#A0A0A0]">Gain insights into your financial habits with advanced analytics,
                    helping you make smarter decisions and manage money effectively.</p>

                <div className="bg-white w-[300px] h-[117px] rounded-2xl">

                    <div className="flex items-center gap-4 px-5 py-2 ">
                        <US title="United States" className="w-9 h-9 " />

                        <div className="flex items-center justify-center gap-12 ">
                            <div className="flex flex-col py-1 ">
                                <p>US Dollar</p>
                                <div className="w-[115px] h-1 rounded-full bg-gray-200">
                                    <div
                                        className="h-1 rounded-full bg-green-400"
                                        style={{ width: "75%" }}
                                    />
                                </div>
                            </div>

                            <p className="font-medium text-xs text-[#B5B5B5] ">$290.99</p>

                        </div>
                    </div>

                    <div className="flex items-center gap-4 px-5 py-2 ">
                        <EU title="Europe" className="w-9 h-9 " />

                        <div className="flex items-center justify-center gap-12 ">

                            <div className="flex flex-col ">
                                <p>Euro</p>
                                <div className="w-[115px] h-1 rounded-full bg-gray-200">
                                    <div
                                        className="h-1 rounded-full bg-green-400"
                                        style={{ width: "25%" }}
                                    />
                                </div>
                            </div>

                            <p className="font-medium text-xs text-[#B5B5B5] ">€290.99</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-[#F6F6F6] w-[346px] h-[308px] rounded-4xl px-6 py-3">
                <p className=" py-2 text-center font-medium text-xl">Budgeting</p>
                <p className="py-3 text-center font-medium text-base text-[#A0A0A0]">Stay in control of your income and expenses with powerful
                    budgeting tools designed to help you reach your financial goals.</p>

                <div className="flex flex-col gap-4">
                    <div className="bg-white w-[300px] h-[49px] rounded-2xl flex gap-32">

                        <div className="flex flex-col px-5 py-1">
                            <p className="font-medium text-base">€290,120.99</p>
                            <p className="font-regular text-xs text-[#B5B5B5]">Gross Sales</p>
                        </div>

                        <p className="text-[#395828] text-medium text-[10px] pt-2">+9%</p>

                    </div>

                    <div className="bg-white w-[300px] h-[49px] rounded-2xl flex gap-28">

                        <div className="flex flex-col px-5 py-1">
                            <p className="font-medium text-base">1290</p>
                            <p className="font-regular text-xs text-[#B5B5B5]">Orders</p>
                        </div>

                        <div className="flex flex-col justify-center pr-3">
                            <p className="text-[#395828] text-medium text-[10px] text-end ">+5%</p>

                            <p className="pr-">Last 30 days</p>

                        </div>

                    </div>
                </div>

            </div>

            <div className="bg-[#F6F6F6] w-[346px] h-[308px] rounded-4xl px-6 py-3">
                <p className=" py-2 text-center font-medium text-xl">Accounts</p>
                <p className="py-3 text-center font-medium text-base text-[#A0A0A0]">Effortlessly manage all your accounts in one place,
                    giving you a clear and organized overview of your finances.</p>

                <div className="bg-white w-[300px] h-[117px] rounded-2xl mt-5">

                    <div className="flex items-center gap-4 px-5 py-2 ">
                        <div className="w-9 h-9 rounded-full bg-[#328072] flex items-center justify-center">
                            <ShoppingCart />
                        </div>

                        <div className="flex items-center justify-between gap-24">
                            <p>Shopping</p>

                            <p className="font-medium text-xs text-[#B5B5B5] ">$200.63</p>

                        </div>
                    </div>

                    <div className="flex items-center gap-4 px-5 py-2 ">
                        <div className="w-9 h-9 rounded-full bg-[#B780FF] flex items-center justify-center">
                            <Train />
                        </div>

                        <div className="flex items-center justify-between gap-30">

                            <p>Travel</p>

                            <p className="font-medium text-xs text-[#B5B5B5] ">$100.63</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>

    );
}