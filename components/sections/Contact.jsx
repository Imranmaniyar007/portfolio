"use client";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-24 px-6 lg:px-20 overflow-hidden"
        >
            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]" />

            {/* TITLE */}
            <h2 className="text-4xl lg:text-5xl text-center mb-16">
                <span className="text-purple-400">Let's Work Together</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* ================= FORM ================= */}
                <form
                    action="mailto:imranmaniyar672@gmail.com"
                    method="POST"
                    encType="text/plain"
                    className="
          flex flex-col space-y-6
          bg-black/40
          backdrop-blur-xl
          border border-purple-500/20
          p-8 rounded-2xl
          shadow-[0_0_40px_rgba(0,0,0,0.6)]
          "
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="contact-input"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="contact-input"
                    />

                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        className="contact-input"
                    />

                    <button
                        type="submit"
                        className="
            py-3 rounded-xl
            bg-gradient-to-r
            from-purple-500 to-pink-500
            text-white font-semibold
            hover:scale-105
            transition
            shadow-lg shadow-purple-500/30
            "
                    >
                        Send Message
                    </button>
                </form>

                {/* ================= CONTACT INFO ================= */}
                <div
                    className="
          bg-black/40
          backdrop-blur-xl
          border border-purple-500/20
          p-8 rounded-2xl
          shadow-[0_0_40px_rgba(0,0,0,0.6)]
          "
                >
                    <h3 className="text-2xl text-purple-400 mb-8">
                        Contact Information
                    </h3>

                    <div className="space-y-8">
                        <Info icon="📞" title="Phone" value="+91 XXXXXXXX" />
                        <Info
                            icon="✉️"
                            title="Email"
                            value="imranmaniyar672@gmail.com"
                        />
                        <Info
                            icon="📍"
                            title="Location"
                            value="Pune, Maharashtra, India"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ================= INFO ITEM ================= */

function Info({ icon, title, value }) {
    return (
        <div className="flex items-center gap-5">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600/20 border border-purple-500/30">
                <span className="text-lg">{icon}</span>
            </div>

            <div>
                <p className="text-gray-400 text-sm">{title}</p>
                <p className="text-white">{value}</p>
            </div>
        </div>
    );
}
