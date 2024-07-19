import React from "react";

function Contact() {
  const email = "bekonorosy0@gmail.com";

  return (
    <section id="contact" className="p-6 bg-darker-blue">
      <div className="flex flex-col gap-2.5 p-8 bg-dark-purple rounded-2xl w-full max-w-3xl mx-auto">
        <p id="heading" className="text-center text-white text-xl my-8">Contact Me</p>
        <p className="text-center text-white text-lg">
          If you have any questions or want to get in touch, please email me at:
        </p>
        <p className="text-center text-white text-lg">
          <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
            {email}
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
