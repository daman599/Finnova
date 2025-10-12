"use client"

import { Bitcoin, DollarSign, HandCoins } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Crypto() {

    const pathRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({ target: pathRef, offset: ["start center", "end center"] });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className="flex items-center justify-between px-2 md:px-8 lg:px-20 md:py-24 md:gap-6">

            <div className="flex flex-col space-y-4 w-full md:max-w-xl items-start justify-center">
                <div className="flex items-center justify-center gap-2 lg:gap-3 px-4 lg:px-5 py-2 rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#058E00]/40 w-fit">
                    <span className="w-1 h-1 rounded-full bg-[#058E00] ring-1 ring-[#2dd327] animate-ping
                    shadow-background "></span>
                    <span className="font-medium text-xs md:text-sm text-[#058E00]">Cryptocurrency</span>
                </div>

                <div className="flex flex-col items-start justify-center space-y-3 md:space-y-5">

                    <p className=" lg:leading-13 font-semibold text-2xl sm:text-3xl lg:text-5xl">
                        Join the crypto revolution with Finnova
                    </p>

                    <p className="text-[#9F9F9F] w-full sm:max-w-96 font-medium text-xs sm:text-sm md:text-base ">
                        Invest in the future: safe and profitable crypto assets for everyone.
                    </p>

                    <div className="bg-black w-fit px-3 py-1 flex items-center justify-center rounded-2xl ">
                        <span className="font-medium text-xs text-[#9F9F9F]">Get started</span>
                    </div>
                </div>
            </div>

            <motion.div
                ref={pathRef}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative hidden md:flex flex-col max-w-xl h-full"
            >
                <svg
                    className="absolute inset-0 w-full h-full z-0"
                    viewBox="0 0 300 500"
                    fill="none"
                >
                    {/* S-shape curve */}
                    <motion.path
                        style={{ pathLength }}
                        d="M200 80 C 0 230, 180 350, 200 400 S 150 500, 150 480"
                        stroke="#888"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>

                <span className="md:ml-48 lg:ml-50 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center [transform:rotateX(50deg)_rotateY(-50deg)] bg-[#FBBC05]">
                    <DollarSign color="white" className="md:w-15 md:h-15 lg:w-20 lg:h-20" />
                </span>

                <span className="md:ml-2 lg:ml-3 md:mt-8 lg:mt-12 md:w-44 md:h-44 lg:w-50 lg:h-50 rounded-full flex items-center justify-center [transform:rotateX(40deg)_rotateY(50deg)] bg-[#395828]">
                    <HandCoins color="white" className="md:w-18 md:h-18 lg:w-22 lg:h-22" />
                </span>

                <span className="md:ml-48 lg:ml-56 md:mt-4 lg:mt-8 md:w-46 md:h-46 lg:w-50 lg:h-50 rounded-full flex items-center justify-center [transform:rotateX(40deg)_rotateY(-40deg)]  bg-black">
                    <Bitcoin color="white" className="md:w-28 md:h-28 lg:w-30 lg:h-30" />
                </span>

            </motion.div>

        </div >
    );
}