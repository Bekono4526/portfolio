import React, { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [messageText, setMessageText] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // Prévenir le rechargement de la page
        setMessage("Merci pour votre message, nous vous répondrons bientôt !");

        // Réinitialiser les champs du formulaire
        setName("");
        setEmail("");
        setMessageText("");

        // Réinitialiser le message après 5 secondes
        setTimeout(() => {
            setMessage("");
        }, 5000);
    };

    return (
        <section id="contact" className="border border-bg-darker-blue p-6 bg-gray-100 mt-10">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-lg font-medium">Nom</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg font-medium">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-lg font-medium">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required 
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="mt-4 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                >
                    Envoyer
                </button>
            </form>
            {message && <p className="mt-2 text-green-500">{message}</p>}
        </section>
    );
}

export default Contact;
