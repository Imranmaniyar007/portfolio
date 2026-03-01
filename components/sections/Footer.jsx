import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="text-center py-10 bg-black/40">
            
            <h3 className="text-xl">Imran Maniyar</h3>

            <p className="text-gray-400">
                B.E Computer Engineering Student | Aspiring Developer
            </p>

            <div className="flex justify-center gap-6 mt-4 text-xl">
                <a href="https://www.linkedin.com/in/imran-maniyar-31b618292">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/Imranmaniyar007">
                    <FaGithub />
                </a>

                <a href="https://x.com/IMU_00M4">
                    <FaXTwitter />
                </a>
            </div>

            <p className="mt-6 text-sm text-gray-500">
                © 2024 Imran Maniyar. All rights reserved.
            </p>
        </footer>
    );
}
