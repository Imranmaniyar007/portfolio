"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Linkedin } from "lucide-react";

export default function ProjectCard({ project }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="
      group relative overflow-hidden
      rounded-2xl
      bg-black/40 backdrop-blur-xl
      border border-purple-500/20
      hover:border-purple-400
      transition duration-500
      hover:shadow-[0_0_45px_rgba(168,85,247,0.5)]
      "
        >
            {/* ===== MEDIA ===== */}
            <div className="relative h-52 overflow-hidden">
                {project.video ? (
                    <video
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover
            group-hover:scale-110 transition duration-700"
                    />
                ) : (
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover
            group-hover:scale-110 transition duration-700"
                    />
                )}

                {/* overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
            </div>

            {/* ===== CONTENT ===== */}
            <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-purple-400">
                    {project.name}
                </h3>

                {/* hidden description */}
                <p
                    className="
          text-gray-300 text-sm
          opacity-0 translate-y-4
          group-hover:opacity-100
          group-hover:translate-y-0
          transition duration-500
          "
                >
                    {project.description}
                </p>

                {/* LINKS */}
                <div
                    className="
          flex gap-4 pt-3
          opacity-0 translate-y-4
          group-hover:opacity-100
          group-hover:translate-y-0
          transition duration-500
          "
                >
                    {project.live && (
                        <a href={project.live} target="_blank">
                            <ExternalLink className="hover:text-purple-400" />
                        </a>
                    )}

                    {project.github && (
                        <a href={project.github} target="_blank">
                            <Github className="hover:text-purple-400" />
                        </a>
                    )}

                    {project.linkedin && (
                        <a href={project.linkedin} target="_blank">
                            <Linkedin className="hover:text-purple-400" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
