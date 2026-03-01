"use client";

import { motion } from "framer-motion";

export default function TechCard({ tech }) {
    return (
        <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="
      group
      relative
      min-w-[200px]
      h-[170px]
      mx-8
      rounded-2xl
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      flex flex-col
      items-center
      justify-center
      overflow-hidden
      transition
      hover:border-purple-400
      hover:shadow-[0_0_45px_rgba(168,85,247,0.6)]
      "
        >
            {/* ICON */}
            <motion.img
                src={tech.icon}
                alt={tech.name}
                variants={{
                    rest: {
                        rotate: 0,
                        y: 0,
                        scale: 1,
                    },
                    hover: {
                        rotateY: 25,
                        y: -12,
                        scale: 1.2,
                    },
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                }}
                animate={{
                    y: [0, -8, 0],
                }}
                style={{
                    animationDuration: "4s",
                }}
                className="w-24 h-24 object-contain"
            />

            {/* TECH NAME */}
            <motion.span
                variants={{
                    rest: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="
        absolute bottom-4
        text-sm font-medium
        text-purple-300
        tracking-wide
        "
            >
                {tech.name}
            </motion.span>

            {/* glow background */}
            <div
                className="
        absolute inset-0 opacity-0
        group-hover:opacity-100
        transition duration-500
        bg-gradient-to-br
        from-purple-500/10
        via-transparent
        to-amber-400/10
        "
            />
        </motion.div>
    );
}
