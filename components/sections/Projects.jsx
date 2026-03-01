"use client";

import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
    const projects = [
        {
            name: "RaisoX Restaurant Website",
            image: "/projects/raisox.png",

            description:
                "Full-stack restaurant website built using PHP & MySQL featuring dynamic menu management and responsive UI.",

            live: "https://lnkd.in/dXxkfkbR",
            linkedin: "https://www.linkedin.com/posts/imran-maniyar-31b618292_fullstackdevelopment-php-mysql-activity-7419010109147668480-zmgb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbtMMcB451M3SUeDOsIUhD8IxR-UNzZD7w",
            github: "https://lnkd.in/dXxkfkbR",
        },

        {
            name: "AgriSan AI Chatbot",

            image: "/projects/agrisan.png",

            description:
                "AI-powered smart farming assistant developed using IBM Cloud and RAG architecture to provide agricultural guidance. Currently deployed on IBM Cloud environment.",
        },

        {
            name: "CredFy - Credit Risk Prediction",
            image: "/projects/credfy.png",

            description:
                "Machine learning system predicting credit risk using financial datasets to assist lending decisions.",

            live: "https://lnkd.in/df5faDcf",
            github: "https://lnkd.in/dMFd5JqN",
        },

        {
            name: "Task Management App",
            image: "/projects/taskapp.png",

            description:
                "Modern productivity application enabling task tracking and workflow organization.",
        },

        {
            name: "Todo App",
            image: "/projects/todo.png",

            description:
                "Lightweight task manager focused on performance and clean UI experience.",
        },
    ];

    return (
        <section id="projects" className="py-32 px-6 lg:px-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-20">
                Featured <span className="text-purple-400">Projects</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </div>
        </section>
    );
}
