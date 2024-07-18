
import React from "react";

function About() {
  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="p-6 md:p-20 bg-dark-blue text-white">
      <h2 className="text-xl md:text-2xl font-bold text-white font-custom mb-4 md:mb-6 mt-4 text-center md:text-left cursor-default">
        About me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-5xl mx-auto space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
          <img src="cute.webp" alt="About Me" className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover" />
        </div>
        <p className="text-base md:text-lg text-white font-custom text-left w-full md:w-3/4 leading-relaxed cursor-default">
          Hello! I am a dedicated Full Stack Developer with a strong foundation in
          both front-end and back-end technologies. With a passion for creating
          seamless and visually appealing user experiences, I am now specializing
          in Front-End Development. Proficient in HTML, CSS, JavaScript, and
          modern frameworks like React and Laravel, I aim to build responsive and
          high-performance web applications. My full stack background enables
          effective collaboration with back-end teams to deliver cohesive and
          robust solutions. I am committed to continuous learning and staying
          up-to-date with the latest front-end trends. Excited to bring innovative
          ideas to life, I look forward to creating exceptional digital
          experiences.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row mt-6 md:mt-10 gap-4 justify-center md:justify-start">
        <a href="/cv.pdf" download className="bg-vert w-full sm:w-40 p-2 text-center">CV</a>
        <a 
          href="#contact" 
          onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
          className="bg-violet w-full sm:w-40 p-2 text-center"
        >
          Contact
        </a>
      </div>
    </section>
  );
}

export default About;
