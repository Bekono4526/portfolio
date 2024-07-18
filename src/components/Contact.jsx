import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post(
        "http://localhost:3001/send-email",
        { name, email, messageText },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if (response.status === 200) {
        setMessage("Merci pour votre message, nous vous répondrons bientôt !");
        setName("");
        setEmail("");
        setMessageText("");
      } else {
        setMessage("Échec de l'envoi du message. Veuillez réessayer plus tard.");
      }
    } catch (error) {
      console.error("There was an error sending the email:", error);
      setMessage("Échec de l'envoi du message. Veuillez réessayer plus tard.");
    }

    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <section id="contact" className="p-6 bg-darker-blue">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 p-8 bg-dark-purple rounded-2xl hover:scale-105 transition duration-400 hover:border border-black w-4/5 mx-auto">
        <p id="heading" className="text-center text-white text-xl my-8">Contact Me</p>
        <div className="field flex items-center justify-center gap-2 rounded-2xl py-2.5 bg-dark-purple shadow-[inset_2px_5px_10px_rgba(5,5,5)]">
          <input
            type="text"
            placeholder="Your Name"
            autoComplete="off"
            className="bg-transparent border-none outline-none w-full text-gray-300 text-left px-8 placeholder-gray-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="field flex items-center justify-center gap-2 rounded-2xl py-2.5 bg-dark-purple shadow-[inset_2px_5px_10px_rgba(5,5,5)]">
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border-none outline-none w-full text-gray-300 text-left px-8 placeholder-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field flex items-center justify-center gap-2 rounded-2xl py-2.5 bg-dark-purple shadow-[inset_2px_5px_10px_rgba(5,5,5)]">
          <textarea
            placeholder="Your Message"
            rows="4"
            className="bg-transparent border-none outline-none w-full text-gray-300 text-left px-8 placeholder-gray-300"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="btn flex justify-center flex-row mt-10">
          <button type="submit" className="py-2 px-4 rounded-md bg-gray-800 text-white hover:bg-dark-violet transition duration-400">
            Send Message
          </button>
        </div>
        {message && <p className="mt-2 text-white bg-vert p-2 z-40 ">{message}</p>}
      </form>
    </section>
  );
}

export default Contact;
