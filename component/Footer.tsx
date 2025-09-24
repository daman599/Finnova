import { inriaSerif } from "@/lib/font";

interface Obj {
    [key: string]: string[];
}

const Extras: Obj[] = [
    { "Sections": ["Personal", "Business", "Company"] },
    { "Help": ["Privacy", "Complaints", "Cookie Policy"] },
    { "Company policies": ["Website terms", "Legal agreements", "Modern policy"] },
];

export default function Footer() {
    return (
        <div className="mx-5 lg:mx-16 mb-8 sm:mb-12 md:mb-24 bg-[#F6F6F6] rounded-3xl p-6 md:p-12 flex justify-between items-end">

            <div className="flex flex-wrap gap-10 sm:gap-14 md:gap-20 lg:gap-28 items-start md:order-2">
                {Extras.map((obj, index) => {
                    const title = Object.keys(obj)[0];
                    const items = obj[title];

                    return (
                        <div key={index} className="flex flex-col gap-1">
                            <p className="font-semibold text-xs sm:text-sm md:text-base">
                                {title}
                            </p>

                            {items.map((item, i) => (
                                <p
                                    key={i}
                                    className={`text-[#A0A0A0] text-xs sm:text-sm md:text-base ${i === 0 ? "pt-2" : ""
                                        }`}
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    );
                })}
            </div>

            <div
                className={` font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl ${inriaSerif.className}`}
            >
                Finnova
            </div>
        </div>
    );
}
