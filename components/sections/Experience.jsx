"use client";

import { motion } from "framer-motion";

/* ================= DATA ================= */

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
            className="py-32 px-6 lg:px-20 relative before:absolute before:inset-0
before:bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent)]
before:-z-10"
        >
            {/* ===== TITLE ===== */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl lg:text-5xl font-bold text-center mb-24"
            >
                My <span className="text-purple-400">Experience</span>
            </motion.h2>

            {/* ===== TIMELINE ===== */}
            <div className="relative max-w-5xl mx-auto">
                {/* CENTER LINE */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 h-full w-[2px]
        bg-gradient-to-b from-purple-500 via-purple-400 to-transparent"
                />

                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={`mb-20 flex ${
                            i % 2 === 0 ? "justify-start" : "justify-end"
                        }`}
                    >
                        {/* CARD */}
                        <div
                            className="
              relative w-[45%]
              p-7 rounded-2xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
              transition duration-500
              group
              hover:border-purple-400
              hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]
              hover:-translate-y-2
              "
                        >
                            {/* TIMELINE DOT */}
                            <span
                                className={`
  absolute top-8
  w-5 h-5 rounded-full
  bg-purple-500
  shadow-[0_0_20px_rgba(168,85,247,0.9)]
  group-hover:scale-125
  transition
  ${i % 2 === 0 ? "-right-10" : "-left-10"}
  `}
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
