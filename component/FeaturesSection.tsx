import { US, EU } from "country-flag-icons/react/3x2";
import { ShoppingCart, Train } from "lucide-react";

interface AnalyticsType {
    flag: React.ComponentType<{ title: string, className: string }>,
    name: string,
    currency: string,
    balance: string,
    progress: string,
}

const Analytics: AnalyticsType[] = [
    { flag: US, name: "USA", currency: "US Dollar", balance: "$290.99", progress: "75%" },
    { flag: EU, name: "Europe", currency: "Euro", balance: "€290.99", progress: "25%" },
];

interface BudgetingType {
    title: string,
    subtitle: string,
    profit: string,
}

const Budgeting: BudgetingType[] = [
    { title: "€290,120.99", subtitle: "Gross Sales", profit: "+9%" },
    { title: "1290", subtitle: "Orders", profit: "+5%" },
];

interface AccountsType {
    icon: React.ComponentType,
    name: string,
    expanses: string,
    color: string,
}

const Accounts: AccountsType[] = [
    { icon: ShoppingCart, name: "Shopping", expanses: "$200.63", color: "#328072" },
    { icon: Train, name: "Travel", expanses: "$100.63", color: "#B780FF" },
];

export default function FeaturesSection() {
    return (
        <div className="flex items-center justify-center my-48 gap-8 ">

            <div className="bg-[#F6F6F6] w-[346px] h-[308px] rounded-4xl px-6 py-3">
                <p className="py-2 text-center font-medium text-sm sm:text-base md:text-xl">Analytics</p>
                <p className="py-3 text-center font-medium text-xs sm:text-sm md:text-base text-[#A0A0A0]">Gain insights into your financial habits with advanced analytics,
                    helping you make smarter decisions and manage money effectively.</p>

                <div className="bg-white w-[300px] h-[117px] rounded-2xl">
                    {Analytics.map((obj, i) => {
                        const Flag = obj.flag;

                        return (
                            <div key={i} className="flex items-center gap-4 px-5 py-2 ">
                                <Flag title={obj.name} className="w-9 h-9 " />

                                <div className="flex items-center justify-center gap-12 ">
                                    <div className="flex flex-col py-1 ">
                                        <p>{obj.currency}</p>
                                        <div className="w-[115px] h-1 rounded-full bg-gray-200">
                                            <div
                                                className="h-1 rounded-full bg-green-400"
                                                style={{ width: obj.progress }}
                                            />
                                        </div>
                                    </div>

                                    <p className="font-medium text-xs text-[#B5B5B5] ">{obj.balance}</p>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="bg-[#F6F6F6] w-[346px] h-[308px] rounded-4xl px-6 py-3">
                <p className=" py-2 text-center font-medium text-sm sm:text-base md:text-xl">Budgeting</p>
                <p className="py-3 text-center font-medium text-xs sm:text-sm md:text-base text-[#A0A0A0]">Stay in control of your income and expenses with powerful
                    budgeting tools designed to help you reach your financial goals.</p>

                <div className="flex flex-col gap-4">
                    {Budgeting.map((obj, i) => (
                        <div key={i} className="bg-white w-[300px] h-[49px] rounded-2xl flex justify-between px-5">
                            <div className="flex flex-col py-1">
                                <p className="font-medium text-base">{obj.title}</p>
                                <p className="font-regular text-xs text-[#B5B5B5]">{obj.subtitle}</p>
                            </div>
                            {i == 0 &&
                                (<p className="text-[#395828] text-medium text-[10px] pt-2 ">{obj.profit}</p>)
                            }

                            {i == 1 && (
                                <div className="flex flex-col justify-center">
                                    <p className="text-[#395828] text-medium text-[10px] text-end ">{obj.profit}</p>
                                    <p className="pr-1">Last 30 days</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#F6F6F6] w-[346px] h-[308px] rounded-4xl px-6 py-3">
                <p className="py-2 text-center font-medium text-sm sm:text-base md:text-xl">Accounts</p>
                <p className="py-3 text-center font-medium text-xs sm:text-sm md:text-base text-[#A0A0A0]">Effortlessly manage all your accounts in one place,
                    giving you a clear and organized overview of your finances.</p>

                <div className="bg-white w-[300px] h-[117px] rounded-2xl mt-5">
                    {Accounts.map((obj, i) => {
                        const Icon = obj.icon;

                        return (
                            <div key={i} className="flex items-center justify-between px-5 py-2 ">
                                <div className="flex items-center gap-2">
                                    <div className={`w-9 h-9 rounded-full bg-[${obj.color}] flex items-center justify-center`}>
                                        <Icon />
                                    </div>
                                    <p>{obj.name}</p>
                                </div>

                                <div className="flex">
                                    <p className="font-medium text-xs text-[#B5B5B5] ">{obj.expanses}</p>
                                </div>
                            </div>
                        );
                    })}
                </div >
            </div >
        </div >
    );
}