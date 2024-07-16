import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import des icônes de menu et de fermeture

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    console.log("isOpen:", isOpen); // Ajouter un log pour voir l'état de isOpen

    return (
        <header className='flex justify-between items-center p-6 bg-dark-purple text-white relative '>
            {/* Bouton et titre pour le mode mobile */}
            <div className="flex justify-between items-center w-full md:hidden" style={{ zIndex: 30 }}>
                <h1 className={`text-2xl font-bold text-white font-custom ${isOpen ? 'mb-70' : ''}`}>Bekono Sophie</h1>
                <button
                    className='text-2xl'
                    onClick={() => setIsOpen(!isOpen)} // Basculer l'état du menu
                    style={{ position: 'relative', zIndex: 20 }} // S'assure que le bouton est toujours cliquable
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Titre pour les écrans moyens et grands */}
            <h1 className="md:block hidden text-2xl font-bold text-white font-custom">Bekono Sophie</h1>

            {/* Menu coulissant */}
            <div
                className={`fixed inset-0 bg-dark-blue z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:hidden`}
                style={{ width: "80%" }}
            >
                <div className="flex flex-col items-start p-4 space-y-4 text-white font-custom">
                    <h1 className="text-2xl font-bold text-white mb-6">Bekono Sophie</h1> {/* Ajout du titre dans le menu */}
                    <a href="#about" onClick={() => setIsOpen(false)}>About me</a>
                    <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </div>
            </div>

            {/* Menu pour les écrans moyens et grands */}
            <nav className='hidden md:flex font-custom'>
                <ul className='flex gap-8 mr-10'>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
