import React from 'react';

function About() {
    return (
        <section id="about" className="flex flex-col items-center p-10 bg-dark-violet text-white">
            <h2 className="text-4xl font-bold text-white font-custom mb-6">About me</h2>
            <p className="text-lg text-white font-custom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. [Texte continu]...
            </p>
            <div>
                <button className="bg-vert">CV</button>
                <button className='bg-violet'>Contact</button>
            </div>
        </section>
    );
}

export default About;
