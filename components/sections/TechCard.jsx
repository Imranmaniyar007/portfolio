"use client";

import { motion } from "framer-motion";

export default function TechCard({ tech }) {
    return (
        <motion.div
            style={{ transformStyle: "preserve-3d" }}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="
      group relative
      min-w-[220px]
      h-[180px]
      mx-8
      rounded-2xl
      overflow-hidden

      bg-black/40
      backdrop-blur-xl
      border border-purple-500/20

      flex flex-col
      items-center
      justify-center

      transition duration-500
      hover:border-purple-400
      hover:shadow-[0_0_45px_rgba(168,85,247,0.5)]
      "
        >
            {/* SOFT GRADIENT GLOW */}
            <div
                className="
        absolute inset-0 opacity-0
        group-hover:opacity-100
        transition duration-500
        bg-gradient-to-br
        from-purple-500/10
        via-transparent
        to-pink-500/10
        "
            />

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
                        rotateY: 20,
                        y: -12,
                        scale: 1.25,
                    },
                }}
                transition={{
                    duration: 0.45,
                    ease: "easeOut",
                }}
                animate={{
                    y: [0, -10, 0],
                }}
                className="
        w-28 h-28
        object-contain
        relative z-10
        "
            />

            {/* NAME ON HOVER */}
            <motion.span
                variants={{
                    rest: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="
        absolute bottom-5
        text-sm font-medium
        text-purple-300
        tracking-wide
        z-10
        "
            >
                {tech.name}
            </motion.span>
        </motion.div>
    );
}
