import React, { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [messageText, setMessageText] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents page reload on form submission
        setMessage("Merci pour votre message, nous vous répondrons bientôt !"); // Set confirmation message

        // Reset the form fields
        setName("");
        setEmail("");
        setMessageText("");

        // Automatically clear the message after 5 seconds
        setTimeout(() => {
            setMessage("");
        }, 5000);
    };

    return (
        <section id="contact" className="border border-bg-darker-blue p-6 bg-gray-100 mt-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 p-8 bg-gray-900 rounded-2xl hover:scale-105 transition duration-400 hover:border border-black w-4/5 mx-auto">
                <p id="heading" className="text-center text-white text-xl my-8">Contact Us</p>
                <div className="field flex items-center justify-center gap-2 rounded-2xl py-2.5 bg-gray-900 shadow-[inset_2px_5px_10px_rgba(5,5,5)]">
                    <input
                        type="text"
                        placeholder="Your Name"
                        autoComplete="off"
                        className="bg-transparent border-none outline-none w-full text-gray-300 text-left px-8 placeholder-gray-300"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="field flex items-center justify-center gap-2 rounded-2xl py-2.5 bg-gray-900 shadow-[inset_2px_5px_10px_rgba(5,5,5)]">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="bg-transparent border-none outline-none w-full text-gray-300 text-left px-8 placeholder-gray-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="field flex items-center justify-center gap-2 rounded-2xl py-2.5 bg-gray-900 shadow-[inset_2px_5px_10px_rgba(5,5,5)]">
                    <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="bg-transparent border-none outline-none w-full text-gray-300 text-left px-8 placeholder-gray-300"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                    ></textarea>
                </div>
                <div className="btn flex justify-center flex-row mt-10">
                    <button type="submit" className="py-2 px-4 rounded-md bg-gray-800 text-white hover:bg-black transition duration-400">
                        Send Message
                    </button>
                </div>
            </form>
            {message && <p className="mt-2 text-green-500">{message}</p>}
        </section>
    );
}

export default Contact;
