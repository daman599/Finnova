import { US, EU } from "country-flag-icons/react/3x2";
import { ShoppingCart, Train } from "lucide-react";

interface AnalyticsType {
    flag: React.ComponentType<{ title: string; className: string }>;
    name: string;
    currency: string;
    balance: string;
    progress: string;
}

const analyticsData: AnalyticsType[] = [
    { flag: US, name: "USA", currency: "US Dollar", balance: "$290.99", progress: "75%" },
    { flag: EU, name: "Europe", currency: "Euro", balance: "€290.99", progress: "25%" },
];

interface BudgetingType {
    title: string;
    subtitle: string;
    profit: string;
    extraNote?: string;
}

const budgetingData: BudgetingType[] = [
    { title: "€290,120.99", subtitle: "Gross Sales", profit: "+9%" },
    { title: "1290", subtitle: "Orders", profit: "+5%", extraNote: "Last 30 days" },
];

interface AccountsType {
    icon: React.ElementType;
    name: string;
    expanses: string;
    color: string;
}

const accountsData: AccountsType[] = [
    { icon: ShoppingCart, name: "Shopping", expanses: "$200.63", color: "#328072" },
    { icon: Train, name: "Travel", expanses: "$100.63", color: "#B780FF" },
];

function FeatureCard({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
    return (
        <div className="bg-[#F6F6F6] w-[346px] h-[308px] rounded-4xl px-6 py-3">
            <p className="py-2 text-center font-medium text-sm sm:text-base md:text-xl">{title}</p>
            <p className="py-3 text-center font-medium text-xs sm:text-sm md:text-base text-[#A0A0A0]">{description}</p>
            {children}
        </div>
    );
}

export default function FeaturesSection() {
    return (
        <div className="flex items-center justify-center my-48 gap-8">

            <FeatureCard
                title="Analytics"
                description="Gain insights into your financial habits with advanced analytics, helping you make smarter decisions and manage money effectively."
            >
                <div className="bg-white w-[300px] rounded-2xl">
                    {analyticsData.map((obj, i) => {
                        const Flag = obj.flag;
                        return (
                            <div key={i} className="flex items-center gap-4 px-5 py-2">
                                <Flag title={obj.name} className="w-9 h-9" />
                                <div className="flex items-center justify-between gap-6 flex-1">
                                    <div className="flex flex-col py-1">
                                        <p>{obj.currency}</p>
                                        <div className="w-[115px] h-1 rounded-full bg-gray-200">
                                            <div className="h-1 rounded-full bg-green-400" style={{ width: obj.progress }} />
                                        </div>
                                    </div>
                                    <p className="font-medium text-xs text-[#B5B5B5]">{obj.balance}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </FeatureCard>

            <FeatureCard
                title="Budgeting"
                description="Stay in control of your income and expenses with powerful budgeting tools designed to help you reach your financial goals."
            >
                <div className="flex flex-col gap-4">
                    {budgetingData.map((obj, i) => (
                        <div key={i} className="bg-white w-[300px] h-[49px] rounded-2xl flex justify-between px-5">
                            <div className="flex flex-col py-1">
                                <p className="font-medium text-base">{obj.title}</p>
                                <p className="font-regular text-xs text-[#B5B5B5]">{obj.subtitle}</p>
                            </div>
                            <div className="flex flex-col justify-center items-end">
                                <p className="text-[#395828] font-medium text-[10px]">{obj.profit}</p>
                                {obj.extraNote && <p className="text-[10px] text-gray-500">{obj.extraNote}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </FeatureCard>

            <FeatureCard
                title="Accounts"
                description="Effortlessly manage all your accounts in one place, giving you a clear and organized overview of your finances."
            >
                <div className="bg-white w-[300px] rounded-2xl mt-5">
                    {accountsData.map((obj, i) => {
                        const Icon = obj.icon;
                        return (
                            <div key={i} className="flex items-center justify-between px-5 py-2">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-9 h-9 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: obj.color }}
                                    >
                                        <Icon size={16} />
                                    </div>
                                    <p>{obj.name}</p>
                                </div>
                                <p className="font-medium text-xs text-[#B5B5B5]">{obj.expanses}</p>
                            </div>
                        );
                    })}
                </div>
            </FeatureCard>
        </div>
    );
}