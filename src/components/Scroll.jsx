import React from 'react';
import 'tailwindcss/tailwind.css'; // Importation de Tailwind CSS
import Section from './Section'; // Importation du composant Section

const sections = [
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "portfolio", name: "Portfolio" },
    { id: "contact", name: "Contact" }
];

function Scroll() {
    return (
        <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
            {sections.map(section => (
                <Section key={section.id} id={section.id} name={section.name} />
            ))}
        </div>
    );
}

export default Scroll;
