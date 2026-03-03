import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Spline from "@splinetool/react-spline";
export default function Home() {
    return (
        <main className="relative text-white overflow-hidden">
            {/* Background Spline */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-40">
                <Spline scene="https://prod.spline.design/YcBkotmfwXWlgEIl/scene.splinecode" />
            </div>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <TechStack />
            <Contact />
            <Footer />
        </main>
    );
}

