import React, { useRef, useEffect } from "react";

function About({ contactRef }) {
  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="flex flex-col items-center p-6 md:p-20 bg-dark-blue text-white">
      <h2 className="text-xl md:text-2xl font-bold text-white font-custom mb-4 md:mb-6 mt-4">
        About me
      </h2>
      <p className="text-base md:text-lg text-white font-custom text-left w-full max-w-xl">
        Hello! I am a dedicated Full Stack Developer with a strong foundation in
        both front-end and back-end technologies. With a passion for creating
        seamless and visually appealing user experiences, I am now specializing
        in Front-End Development. Proficient in HTML, CSS, JavaScript, and
        modern frameworks like React and Laravel, I aim to build responsive and
        high-performance web applications. My full stack background enables
        effective collaboration with back-end teams to deliver cohesive and
        robust solutions. I am committed to continuous learning and staying
        up-to-date with the latest front-end trends. Excited to bring innovative
        ideas to life, I look forward to creating exceptional 
        digital
        experiences.
      </p>
      <div className="flex flex-col sm:flex-row mt-6 md:mt-10 gap-4">
        <a href="/cv.pdf" download className="bg-vert w-full sm:w-40 p-2 text-center">CV</a>
        <button className="bg-violet w-full sm:w-40 p-2" onClick={handleContactClick}>Contact</button>
      </div>
    </section>
  );
}

export default About;
