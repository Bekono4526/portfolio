
import React from "react";
import 'tailwindcss/tailwind.css';

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
        <section id="skills" className="bg-darker-blue text-white py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Compétences</h2>
                <p className="mb-8">Voici les compétences que je maîtrise.</p>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map(skill => (
                        <span
                            key={skill.name}
                            className={`px-4 py-2 rounded-full text-white font-semibold ${skill.color} transform transition duration-500 ease-in-out hover:scale-110 hover:bg-opacity-75 animate-fadeIn`}
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
