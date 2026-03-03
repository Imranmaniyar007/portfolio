"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "AI & ML Intern",
        company: "CodeAlpha",
        year: "Jan 2026",
    },
    {
        role: "AI & ML Intern",
        company: "EduSkills Foundation",
        year: "Oct – Dec 2025",
    },
    {
        role: "AI Intern",
        company: "Edunet Foundation",
        year: "Jul – Aug 2025",
    },
    {
        role: "Cloud Enthusiast",
        company: "Google Cloud • AWS • IBM Cloud",
        year: "2025",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="
      relative py-28 px-6 lg:px-20
      overflow-hidden
      "
        >
            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_70%)]" />

            {/* TITLE */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl lg:text-5xl font-bold text-center mb-24"
            >
                My <span className="text-purple-400">Experience</span>
            </motion.h2>

            {/* TIMELINE */}
            <div className="relative max-w-5xl mx-auto">
                {/* CENTER LINE */}
                <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-purple-500/40" />

                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`mb-16 flex ${
                            i % 2 === 0 ? "justify-start" : "justify-end"
                        }`}
                    >
                        <div
                            className="
              relative w-full lg:w-[45%]
              p-6 rounded-2xl
              bg-black/5
              backdrop-blur-md
              border border-white/10
              transition duration-500
              hover:border-purple-400
              hover:shadow-[0_0_35px_rgba(168,85,247,0.4)]
              "
                        >
                            {/* DOT */}
                            <span
                                className={`absolute top-8 w-4 h-4 rounded-full bg-purple-500
                ${i % 2 === 0 ? "-right-8" : "-left-8"}
                hidden lg:block`}
                            />

                            <h3 className="text-xl font-semibold text-purple-400">
                                {exp.role}
                            </h3>

                            <p className="text-gray-300 mt-2">{exp.company}</p>

                            <p className="text-amber-400 mt-3">{exp.year}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
