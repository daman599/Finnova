"use client"

import { useState } from "react";

export default function Buttons() {
   const [btn, setBtn] = useState<string>("Personal");

   return (
      <div className="hidden md:flex gap-3 fixed md:right-6 lg:right-18 bottom-8 font-medium text-xs">
         <button onClick={() => { setBtn("Personal") }}
            className={`${btn != "Personal" && "bg-black text-white"} 
            ${btn == "Personal" ? "cursor-not-allowed" : "cursor-pointer"} rounded-2xl py-1 px-4 transition-all duration-300 ease-in-out`}
         >
            Personal
         </button>

         <button onClick={() => { setBtn("Business") }}
            className={`${btn != "Business" && "bg-black text-white"} 
            ${btn == "Business" ? "cursor-not-allowed" : "cursor-pointer"} rounded-2xl py-1 px-4 transition-all duration-300 ease-in-out`}
         >
            Business
         </button>
      </div>
   );
}