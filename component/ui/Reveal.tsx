"use client"
import { motion, Transition } from "motion/react"

interface PropType {
    children: React.ReactNode;
    y?: number;
    duration?: number;
    ease?: Transition["ease"];
}

export default function Reveal({
    children,
    y = 50,
    duration = 1,
    ease = "easeInOut",
}: PropType) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration,
                ease,
            }}
        >
            {children}
        </motion.div>
    );
}