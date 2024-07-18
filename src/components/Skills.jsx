import React from "react";
import 'tailwindcss/tailwind.css';

// Déclaration d'un tableau de compétences avec leurs couleurs associées
const skills = [
    { name: "HTML", color: "bg-red-500" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "PHP", color: "bg-purple-500" },
    { name: "Laravel", color: "bg-red-600" },
    { name: "Sass", color: "bg-pink-500" }
];

function Skills() {
    return (
        <section id="skills" className="p-6 md:p-20 pt-20 md:pt-20 bg-darker-blue text-white cursor-default">
            <div className="container mx-auto px-4 md:px-8 text-left font-custom">
                <h2 className="text-xl md:text-2xl font-bold text-white font-custom mb-4 md:mb-6 mt-4 text-center md:text-left cursor-default hidden md:block">
                    Skills
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map(skill => (
                        <span
                            key={skill.name}
                            className={`px-4 py-2 rounded-full text-sm md:text-base lg:text-lg font-semibold font-custom ${skill.color} transform transition duration-500 ease-in-out hover:scale-110 hover:bg-opacity-75 animate-fadeIn`}
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
