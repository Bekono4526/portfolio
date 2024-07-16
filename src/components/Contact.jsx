import React from "react";

function Contact() {

    return(
        <section className="border border-bg-darker-blue p-6 bg-gray-100">
            <form action="" className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-lg font-medium">Nom</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
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
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-lg font-medium">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required 
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
        </section>
    );
}

export default Contact;
