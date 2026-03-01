export default function About() {
    return (
        <section
            id="about"
            className="px-16 py-32 flex flex-col lg:flex-row items-center gap-16 relative"
        >
            {/* IMAGE */}
            <div className="relative group">
                <div className="absolute inset-0 blur-3xl bg-purple-600 opacity-0 group-hover:opacity-40 transition"></div>

                <img
                    src="/profile.png"
                    className="
        w-80
        object-contain
        drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]
        transition
        duration-500
        group-hover:scale-105
        "
                />
            </div>

            {/* TEXT */}
            <div className="max-w-2xl">
                <h2 className="text-4xl text-purple-400 mb-6 relative inline-block">
                    About Me
                    <span className="block h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 rounded-full animate-pulse"></span>
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    I'm a passionate Computer Engineering student focused on
                    building intelligent systems, scalable cloud architectures,
                    and modern full stack applications. I enjoy turning ideas
                    into impactful digital experiences.
                </p>

                <p className="text-gray-400 leading-relaxed mb-6">
                    My interests include AI Agents, Cloud Deployment, DevOps
                    practices, and designing interactive web applications with
                    clean and modern UI. I constantly explore new technologies
                    to stay ahead in the evolving tech ecosystem.
                </p>

                <div className="flex gap-6 mt-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-purple-400">
                            AI
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Agents & Automation
                        </p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-purple-400">
                            Cloud
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Deployment & DevOps
                        </p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-purple-400">
                            Full Stack
                        </h3>
                        <p className="text-gray-400 text-sm">Modern Web Apps</p>
                    </div>
                </div>
            </div>
            <h1
                className="
  absolute right-10
  top-1/2
  -translate-y-1/2
  text-[160px]
  font-extrabold
  text-white/5
  select-none
  pointer-events-none
  tracking-tight
  text-depth
"
            >IMRAN                                                                         HERE</h1>
        </section>
    );
}
