"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import Keyboard3D from "./Keyboard3D";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Hero() {
    useEffect(() => {
        const btn = document.querySelector(".resume-btn");

        const moveGlow = (e) => {
            const rect = btn.getBoundingClientRect();

            btn.style.setProperty("--x", `${e.clientX - rect.left}px`);

            btn.style.setProperty("--y", `${e.clientY - rect.top}px`);
        };

        btn?.addEventListener("mousemove", moveGlow);

        return () => {
            btn?.removeEventListener("mousemove", moveGlow);
        };
    }, []);
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center text-white pt-32 min-h-screen"
        >
            
            {/* ---------- SPLINE BACKGROUND ---------- */}
            <div className="absolute inset-0 -z-10 opacity-80">
                <Spline scene="https://prod.spline.design/YcBkotmfwXWlgEIl/scene.splinecode" />
            </div>
            
            {/* ---------- MAIN CONTENT ---------- */}
            <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
                {/* ================= LEFT SIDE ================= */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-start"
                >
                    {/* PROFILE IMAGE */}
                    
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative mb-6 group z-20"
                    >
                        {/* glow */}
                        <div className="absolute inset-0 blur-3xl bg-purple-600 opacity-0 group-hover:opacity-40 transition duration-500"></div>

                        <img
                            src="/profile.png"
                            alt="Imran Maniyar"
                            className="
    relative
    w-80
    rounded-2xl
    object-cover
    shadow-2xl
    transition
    duration-500
    group-hover:scale-105
    "
                        />
                    </motion.div>

                    {/* TEXT */}
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                        Hi, I'm <span className="text-purple-600">Imran</span>{" "}
                        <span className="text-white">Maniyar</span>
                    </h1>

                    <p className="mt-4 text-gray-300 text-lg max-w-lg">
                        B.E Computer Science Student | Full Stack Developer |
                        Building modern web & AI powered applications.
                    </p>

                    {/* BUTTON */}
                    <a
                        href="/Imran_Maniyar_Resume.pdf"
                        download
                        className="resume-btn relative px-8 py-3 rounded-xl
  font-semibold text-black bg-white
  transition-all duration-300 overflow-hidden"
                    >
                        Download Resume ↓
                    </a>

                    {/* SOCIAL LINKS */}
                    <div className="flex gap-6 mt-6 text-2xl">
                        <a
                            href="https://github.com/Imranmaniyar007"
                            target="_blank"
                        >
                            <FaGithub className="hover:text-purple-400 transition" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/imran-maniyar-31b618292"
                            target="_blank"
                        >
                            <FaLinkedin className="hover:text-purple-400 transition" />
                        </a>

                        <a href="https://x.com/IMU_00M4" target="_blank">
                            <FaXTwitter className="hover:text-purple-400 transition" />
                        </a>
                    </div>
                </motion.div>

                {/* ================= RIGHT SIDE ================= */}
                
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center mt-10 lg:mt-0"
                >
                    <div className="w-full h-[650px] flex justify-center items-center">
                        <Keyboard3D />
                    </div>
                </motion.div>
            </div>

            {/* ---------- SCROLL INDICATOR ---------- */}
            <div
                onClick={() =>
                    document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" })
                }
                className="absolute bottom-10 left-1/2 
  -translate-x-1/2 cursor-pointer group"
            >
                <div className="flex flex-col items-center gap-3">
                    {/* glowing line */}
                    <div className="relative w-[2px] h-16 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-gradient-to-b 
      from-purple-400 via-purple-500 to-transparent opacity-70"
                        ></div>

                        {/* moving light effect */}
                        <div
                            className="absolute w-full h-6 bg-purple-400 blur-sm
      animate-scrollGlow"
                        ></div>
                    </div>

                    {/* tech dot */}
                    <div
                        className="w-3 h-3 rounded-full bg-purple-400
    shadow-[0_0_15px_#a855f7]
    group-hover:scale-125 transition duration-300"
                    ></div>
                </div>
            </div>
        </section>
    );
}
