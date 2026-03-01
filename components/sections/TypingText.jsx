"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
    return (
        <TypeAnimation
            sequence={[
                "Full Stack Developer",
                2000,
                "AI Developer",
                2000,
                "Cloud Enthusiast",
                2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-purple-400 text-3xl font-bold"
        />
    );
}
