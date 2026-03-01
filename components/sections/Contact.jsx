

export default function Contact() {
    return (
        <section id="contact" className="px-16 py-24">
            <h2 className="text-4xl text-purple-400 mb-12">
                Let's Work Together
            </h2>

            <div className="grid lg:grid-cols-2 gap-10">
                {/* FORM */}
                <form
                    action="mailto:imran@email.com"
                    method="POST"
                    encType="text/plain"
                    className="flex flex-col space-y-6"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="
      w-full
      px-4
      py-3
      rounded-xl
      bg-white/5
      border border-purple-500/30
      backdrop-blur-lg
      text-white
      placeholder-gray-400
      focus:outline-none
      focus:border-purple-400
      focus:ring-2
      focus:ring-purple-500/30
      transition
    "
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="
      w-full
      px-4
      py-3
      rounded-xl
      bg-white/5
      border border-purple-500/30
      backdrop-blur-lg
      text-white
      placeholder-gray-400
      focus:outline-none
      focus:border-purple-400
      focus:ring-2
      focus:ring-purple-500/30
      transition
    "
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="
      w-full
      px-4
      py-3
      rounded-xl
      bg-white/5
      border border-purple-500/30
      backdrop-blur-lg
      text-white
      placeholder-gray-400
      focus:outline-none
      focus:border-purple-400
      focus:ring-2
      focus:ring-purple-500/30
      transition
    "
                    ></textarea>

                    <button
                        type="submit"
                        className="
      py-3
      rounded-xl
      bg-gradient-to-r
      from-purple-500
      to-pink-500
      text-white
      font-semibold
      hover:scale-105
      transition
      shadow-lg
      shadow-purple-500/30
    "
                    >
                        Send Message
                    </button>
                </form>

                
                {/* CONTACT TABLE */}
                <div className="bg-white/5 border border-purple-500/20 p-10 rounded-2xl backdrop-blur-lg">
                    <h3 className="text-2xl font-semibold text-purple-400 mb-8">
                        Contact Me For Work
                    </h3>

                    <div className="space-y-8">
                        {/* PHONE */}
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600/20 border border-purple-500/30">
                                <span className="text-purple-400 text-lg">
                                    📞
                                </span>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Phone</p>
                                <p className="text-white font-medium">
                                    +91 XXXXXXXX
                                </p>
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600/20 border border-purple-500/30">
                                <span className="text-purple-400 text-lg">
                                    ✉️
                                </span>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <p className="text-white font-medium">
                                    imranmaniyar672@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* LOCATION */}
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600/20 border border-purple-500/30">
                                <span className="text-purple-400 text-lg">
                                    📍
                                </span>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">
                                    Location
                                </p>
                                <p className="text-white font-medium">
                                    Pune, Maharashtra, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
