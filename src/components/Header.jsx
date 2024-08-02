import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = (id) => {
        setIsOpen(false);
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className='flex justify-between items-center p-4 md:p-6 bg-dark-purple text-white fixed top-0 w-full z-50'>
            <h1 
                className="text-2xl font-bold text-white font-custom cursor-pointer"
                onClick={() => handleLinkClick('about')}
            >
                Bekono Sophie
            </h1>
            
            <nav className='hidden md:flex font-custom'>
                <ul className='flex gap-8'>
                    <li className='p-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300'>
                        <a href="#about" onClick={() => handleLinkClick('about')}>About me</a>
                    </li>
                    <li className='p-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300'>
                        <a href="#skills" onClick={() => handleLinkClick('skills')}>Skills</a>
                    </li>
                    <li className='p-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300'>
                        <a href="#projets" onClick={() => handleLinkClick('projets')}>Projects</a>
                    </li>
                    <li className='p-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300'>
                        <a href="#contact" onClick={() => handleLinkClick('contact')}>Contact</a>
                    </li>
                </ul>
            </nav>

            <button
                className='text-2xl md:hidden'
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            <div
                className={`fixed inset-0 bg-dark-purple z-40 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:hidden`}
                style={{ width: "80%" }}
            >
                <div className="flex flex-col items-start p-4 space-y-4 text-white font-custom">
                    <h1 
                        className="text-2xl font-bold text-white mb-6 cursor-pointer"
                        onClick={() => handleLinkClick('about')}
                    >
                        Bekono Sophie
                    </h1>
                    <a href="#about" className='w-full py-2 hover:bg-gray-800' onClick={() => handleLinkClick('about')}>About me</a>
                    <a href="#skills" className='w-full py-2 hover:bg-gray-800' onClick={() => handleLinkClick('skills')}>Skills</a>
                    <a href="#projets" className='w-full py-2 hover:bg-gray-800' onClick={() => handleLinkClick('projets')}>Projects</a>
                    <a href="#contact" className='w-full py-2 hover:bg-gray-800' onClick={() => handleLinkClick('contact')}>Contact</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
