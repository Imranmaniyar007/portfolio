export default function Education() {
    return (
        <section id="education" className="px-16 py-24">
            <h2 className="text-4xl text-purple-400 mb-16">
                Education Journey
            </h2>

            <div className="relative border-l-2 border-purple-500 pl-10 space-y-14">
                {/* BE */}
                <div>
                    <span className="dot" />
                    <h3>B.E Computer Engineering</h3>
                    <p className="text-gray-400">MMIT College, Pune</p>
                </div>

                {/* HSC */}
                <div>
                    <span className="dot" />
                    <h3>Higher Secondary (HSC)</h3>
                    <p className="text-gray-400">Maharashtra State Board</p>
                </div>

                {/* SSC */}
                <div>
                    <span className="dot" />
                    <h3>Secondary School (SSC)</h3>
                    <p className="text-gray-400">Maharashtra State Board</p>
                </div>
            </div>
        </section>
    );
}
