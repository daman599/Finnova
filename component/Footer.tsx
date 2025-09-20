import { Inria_Serif } from "next/font/google";

const inriaSerif = Inria_Serif({
    subsets: ["latin"],
    weight: ["700"],
    style: "normal",
});

interface Obj {
    [key: string]: string[],
}

const Extras: Obj[] = [
    { "Sections": ["Personal", "Business", "Company"] },
    { "Help": ["Privacy", "Complaints", "Cookie Policy"] },
    { "Comapny policies": ["Website terms", "Legal agreements", "Modern policy"] }
]

export default function Footer() {
    return (
        <div className="mx-[60px] mb-[98px] bg-[#F6F6F6] flex rounded-3xl">
            <div className={`pl-[51px] pb-[70px] pt-[270px] font-bold text-4xl ${inriaSerif.className}`}>Finnova</div>

            <div className="flex gap-44 pl-[217px]" >
                {Extras.map((obj, index) => {
                    const title: string = Object.keys(obj)[0];
                    const items: string[] = obj[title];

                    return (
                        <div key={index} className="pt-[56px] flex flex-col gap-1">
                            <p className="font-semibold text-xl">{title}</p>

                            {items.map((item, i) => (
                                <p key={i} className={`text-[#A0A0A0] text-lg ${i == 0 && "pt-5"}`}>
                                    {item}
                                </p>
                            ))}
                        </div>
                    );
                })}

            </div>


        </div>
    );
}
