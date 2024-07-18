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
        <header className='flex justify-between items-center p-6 bg-dark-purple text-white fixed top-0 w-full z-50'>
            <div className="flex justify-between items-center w-full md:hidden">
                <h1 className={`text-2xl font-bold text-white font-custom ${isOpen ? 'mb-70' : ''}`}>Bekono Sophie</h1>
                <button
                    className='text-2xl'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <h1 className="md:block hidden text-2xl font-bold text-white font-custom">Bekono Sophie</h1>

            <div
                className={`fixed inset-0 bg-dark-blue z-40 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:hidden`}
                style={{ width: "80%" }}
            >
                <div className="flex flex-col items-start p-4 space-y-4 text-white font-custom">
                    <h1 className="text-2xl font-bold text-white mb-6">Bekono Sophie</h1>
                    <div className='hover:bg-gray-800 '>
                    <a href="#about" onClick={() => handleLinkClick('about')}>About me</a>
                    </div>
                    
                    <a href="#skills" onClick={() => handleLinkClick('skills')}>Skills</a>
                    <a href="#portfolio" onClick={() => handleLinkClick('portfolio')}>Portfolio</a>
                    <a href="#contact" onClick={() => handleLinkClick('contact')}>Contact</a>
                </div>
            </div>

            <nav className='hidden md:flex font-custom'>
                <ul className='flex gap-8 mr-10'>
                    <div className='p-2 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300'>
                    <li className=''><a href="#about" onClick={() => handleLinkClick('about')}>About me</a></li>   
                    </div>
                    <div className='p-2 px-8 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300'>
                    <li><a href="#skills" onClick={() => handleLinkClick('skills')}>Skills</a></li>
                    </div>
                    <div className='p-2 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300'>
                    <li><a href="#portfolio" onClick={() => handleLinkClick('portfolio')}>Portfolio</a></li>
                    </div>
                    <div className='p-2  px-6 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300'>
                    <li><a href="#contact" onClick={() => handleLinkClick('contact')}>Contact</a></li>
                    </div>
                  
                   
                   
                </ul>
            </nav>
        </header>
    );
}

export default Header;
