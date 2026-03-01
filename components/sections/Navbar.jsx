"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = ["Home", "About", "Projects", "Contact"];

    return (
        <nav className="fixed w-full z-50 backdrop-blur-md bg-black/40 px-6 lg:px-16 py-4 flex justify-between items-center">
            {/* LOGO */}
            

            <a href="#home" className="group">
                <svg
                    width="60"
                    height="60"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition duration-500 group-hover:scale-110"
                >
                    {/* dot */}
                    <circle cx="25" cy="25" r="8" fill="#f59e0b" />

                    {/* handwritten line */}
                    <path
                        d="M20 80 Q40 20 60 80 T100 70"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="transparent"
                    />
                    

                    {/* neon glow */}
                    <path
                        d="M20 80 Q40 20 60 80 T100 70"
                        stroke="#a855f7"
                        strokeWidth="6"
                        opacity="0.4"
                        strokeLinecap="round"
                        fill="transparent"
                    />
                </svg>
                
            </a>
            

            {/* DESKTOP MENU */}
            <div className="hidden md:flex gap-10">
                {links.map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="relative group"
                    >
                        {item}
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            {/* MOBILE BUTTON */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-xl"
            >
                {open ? <FaTimes /> : <FaBars />}
            </button>

            {/* MOBILE SIDEBAR */}
            {open && (
                <motion.div
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    className="absolute top-16 right-0 bg-black w-52 p-6 flex flex-col gap-6 md:hidden"
                >
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setOpen(false)}
                            className="hover:text-purple-400"
                        >
                            {item}
                        </a>
                    ))}
                </motion.div>
            )}
        </nav>
    );
}
