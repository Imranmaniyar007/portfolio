"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    // trail layers
    const trail = Array.from({ length: 7 });

    return (
        <>
            {/* ===== NEON TRAIL ===== */}
            {trail.map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: position.x - 10,
                        y: position.y - 10,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 120 - i * 10,
                        damping: 25,
                        mass: 0.6,
                    }}
                    className="fixed top-0 left-0 pointer-events-none z-[998]"
                    style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        opacity: 0.15 - i * 0.02,
                        filter: "blur(10px)",
                        background:
                            "linear-gradient(90deg,#fde68a,#f59e0b,#a855f7)",
                    }}
                />
            ))}

            {/* ===== MAIN CURSOR ===== */}
            <motion.div
                animate={{
                    x: position.x - 8,
                    y: position.y - 8,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                }}
                className="fixed top-0 left-0 w-4 h-4 rounded-full 
                pointer-events-none z-[999]"
                style={{
                    background:
                        "linear-gradient(90deg,#fde68a,#f59e0b,#a855f7)",
                    boxShadow:
                        "0 0 12px #f59e0b, 0 0 25px #a855f7, 0 0 45px #a855f7",
                }}
            />
        </>
    );
}