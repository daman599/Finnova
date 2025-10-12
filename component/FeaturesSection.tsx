"use client"

import { US, EU } from "country-flag-icons/react/3x2";
import { ShoppingCart, Train } from "lucide-react";
import { motion, stagger, Variants } from "motion/react";

const parentVariant: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: stagger(0.25, { startDelay: 0.10, ease: "easeInOut" })
        }
    },
}

const childVariant: Variants = {
    hidden: { opacity: 0, y: 100 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
}

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
    icon: React.ElementType<{ className: string }>;
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
        <motion.div variants={childVariant} className="bg-[#F6F6F6] rounded-3xl p-5 md:px-3 md:py-3 lg:p-6 flex flex-col" >
            <h3 className="text-center font-medium text-lg md:text-xl mb-2">{title}</h3>
            <p className="text-center text-sm md:text-base text-[#A0A0A0] mb-4">{description}</p>
            <div className="flex-1 items-baseline">{children}</div>
        </motion.div>
    );
}

export default function FeaturesSection() {
    return (
        <motion.div
            variants={parentVariant}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3 lg:gap-6 max-w-6xl mx-auto my-48 px-2">

            <FeatureCard
                title="Analytics"
                description="Gain insights into your financial habits with advanced analytics, helping you make smarter decisions and manage money effectively."
            >
                <div className="bg-white w-full h-fit  rounded-2xl">
                    {analyticsData.map((obj, i) => {
                        const Flag = obj.flag;
                        return (
                            <div key={i} className="flex items-center gap-4 px-5 py-2">
                                <Flag title={obj.name} className="w-6 h-6 md:w-3 md:h-3 lg:w-9 lg:h-9" />
                                <div className="flex items-center justify-between gap-6 flex-1">
                                    <div className="flex flex-col space-y-0.5 flex-1">
                                        <span className="text-sm lg:text-base">{obj.currency}</span>
                                        <div className="w-full h-1 rounded-full bg-gray-200">
                                            <div className="h-1 rounded-full bg-green-400" style={{ width: obj.progress }} />
                                        </div>
                                    </div>

                                    <span className="font-medium text-xs text-[#B5B5B5]">{obj.balance}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </FeatureCard>

            <FeatureCard
                title="Budgeting"
                description="Stay in control of your income and expenses with powerful budgeting tools designed to help you reach your financial goals with less effort and time."
            >
                <div className="flex flex-col w-full gap-1 lg:gap-3">
                    {budgetingData.map((obj, i) => (
                        <div key={i} className="bg-white w-ful rounded-2xl flex flex-col justify-between px-5 py-1">
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-sm lg:text-base">{obj.title}</span>
                                <p className="text-[#395828] font-medium text-xs">{obj.profit}</p>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-normal text-xs text-[#B5B5B5]">{obj.subtitle}</span>
                                {obj.extraNote && <span className="text-xs lg:text-sm">{obj.extraNote}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </FeatureCard>

            <FeatureCard
                title="Accounts"
                description="Effortlessly manage all your accounts in one place, giving you a clear and organized overview of your finances.Easy peasy lemon sequeezy."
            >
                <div className="bg-white w-full h-fit rounded-2xl">
                    {accountsData.map((obj, i) => {
                        const Icon = obj.icon;
                        return (
                            <div
                                key={i}
                                className="flex items-center justify-between px-3 py-2 rounded-xl"
                            >
                                <div className="flex items-center gap-2 lg:gap-3">
                                    <div
                                        className="w-8 h-8 md:w-7 md:h-7 lg:w-9 lg:h-9 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: obj.color }}
                                    >
                                        <Icon className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                                    </div>
                                    <span className="text-sm lg:text-base font-medium">{obj.name}</span>
                                </div>

                                <span className="font-medium text-xs lg:text-sm text-[#7A7A7A]">{obj.expanses}</span>
                            </div>
                        );
                    })}
                </div>

            </FeatureCard>
        </motion.div>
    );
}