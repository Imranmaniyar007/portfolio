"use client";

import TechCard from "./TechCard";
import { techRow1, techRow2 } from "@/constants/techStack";
export default function TechStack() {
    return (
        <section id="skills" className="relative py-28 overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold">
                    Technologies & Tools I Build With
                </h2>
                <p className="text-purple-400 mt-3 tracking-wide">
                    Frontend • Backend • Databases • Cloud • AI
                </p>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                    Leveraging modern frameworks, databases, and cloud platforms
                    to build intelligent, scalable, and production-ready
                    applications.
                </p>
            </div>

            {/* LEFT FADE */}
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />

            {/* RIGHT FADE */}
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

            {/* ROW 1 */}
            <div className="flex overflow-hidden mb-16">
                <div className="flex animate-scroll gap-10">
                    {[...techRow1, ...techRow1].map((tech, i) => (
                        <TechCard key={i} tech={tech} />
                    ))}
                </div>
            </div>

            {/* ROW 2 */}
            <div className="flex overflow-hidden">
                <div className="flex animate-scroll-reverse gap-10">
                    {[...techRow2, ...techRow2].map((tech, i) => (
                        <TechCard key={i} tech={tech} />
                    ))}
                </div>
            </div>
        </section>
    );
}
