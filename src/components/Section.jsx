import React from "react";

function Section({ id, name }) {
    return (
        <section id={id} className="h-screen flex items-center justify-center snap-start bg-gray-800 text-white">
            <h2 className="text-3xl">{name}</h2>
        </section>
    );
}

export default Section;