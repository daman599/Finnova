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
        <div className="bg-[#F6F6F6] w-[346px] h-full rounded-3xl px-6 py-4">
            <p className="py-1 md:py-2 text-center font-medium text-base md:text-xl">{title}</p>
            <div className="flex flex-col space-y-2">
                <p className="py-1 md:py-2 text-center font-medium text-xs sm:text-sm md:text-base text-[#A0A0A0]">{description}</p>
                {children}
            </div>
        </div>
    );
}

export default function FeaturesSection() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 my-48">

            <FeatureCard
                title="Analytics"
                description="Gain insights into your financial habits with advanced analytics, helping you make smarter decisions and manage money effectively."
            >
                <div className="bg-white w-full h-full p-1 rounded-2xl">
                    {analyticsData.map((obj, i) => {
                        const Flag = obj.flag;
                        return (
                            <div key={i} className="flex items-center gap-4 px-5 py-2">
                                <Flag title={obj.name} className="w-9 h-9" />
                                <div className="flex items-center justify-between gap-6 flex-1">
                                    <div className="flex flex-col space-y-0.5 flex-1">
                                        <p className="text-sm md:text-base">{obj.currency}</p>
                                        <div className="w-full h-1 rounded-full bg-gray-200">
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
                <div className="flex flex-col gap-1 w-full h-full md:gap-4">
                    {budgetingData.map((obj, i) => (
                        <div key={i} className="bg-white w-ful rounded-2xl flex flex-col justify-between px-5 py-1">
                            <div className="flex justify-between items-center">
                                <p className="font-medium text:xs sm:text-sm md:text-base">{obj.title}</p>
                                <p className="text-[#395828] font-medium text-xs">{obj.profit}</p>
                            </div>

                            <div className="flex justify-between">
                                <p className="font-normal text-xs text-[#B5B5B5]">{obj.subtitle}</p>
                                {obj.extraNote && <p className="text-xs md:text-sm">{obj.extraNote}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </FeatureCard>

            <FeatureCard
                title="Accounts"
                description="Effortlessly manage all your accounts in one place, giving you a clear and organized overview of your finances. Keep track easily."
            >
                <div className="bg-white w-full h-full p-1 rounded-2xl">
                    {accountsData.map((obj, i) => {
                        const Icon = obj.icon;
                        return (
                            <div key={i} className="flex items-center justify-between gap-20 md:gap-24 px-4 md:px-5 py-1 md:py-2">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-9 h-9 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: obj.color }}
                                    >
                                        <Icon size={16} />
                                    </div>
                                    <p className="text-sm md:text-base">{obj.name}</p>
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