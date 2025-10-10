"use client"

import { motion, useMotionValue, useMotionValueEvent, animate, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";

interface PropsType {
    from?: number;
    to: number;
    duration?: number;
    prefix?: string;
    className: string;
}

export default function CoinsCountUp({
    from = 0,
    to,
    duration = 0.2,
    prefix = "$",
    className
}: PropsType) {

    const val = useMotionValue(from);
    const [displayValue, setDisplayValue] = useState(from);
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, { once: true });

    useMotionValueEvent(val, "change", (latest) => {
        setDisplayValue(Math.floor(latest));
    })

    useEffect(() => {
        if (isInView) {
            animate(val, to, { duration: 0.5, ease: "easeOut" });
        }
    }, [isInView])

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration }}
            className={className}
        >
            {prefix}{displayValue}
        </motion.span>
    );
}