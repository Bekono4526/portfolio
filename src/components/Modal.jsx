import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function Modal({ title, description, siteUrl, codeUrl, onClose }) {
    const [isTextExpanded, setIsTextExpanded] = useState(false);
    
    const toggleText = () => {
        setIsTextExpanded(!isTextExpanded);
    };

    const shortDescription = description ? description.split(' ').slice(0, 20).join(' ') + '...' : 'No description available.';
    const displayText = isTextExpanded ? description : shortDescription;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-purple bg-opacity-50 p-4 md:p-0 overflow-y-auto">
            <div className="bg-dark-blue p-8 rounded-lg shadow-lg relative w-full md:w-auto max-h-screen md:max-h-3/4 overflow-y-auto">
                <button
                    className="absolute top-2 right-2 text-2xl font-bold"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <div className="text-base md:text-lg text-white font-custom text-left leading-relaxed cursor-default mb-4 overflow-y-auto">
                        {displayText}
                    </div>
                    <button onClick={toggleText} className="text-vert mt-2 flex items-center mb-4">
                        {isTextExpanded ? <><FiChevronUp className="mr-1" /> Read Less</> : <><FiChevronDown className="mr-1" /> Read More</>}
                    </button>
                </div>
                <div className="mt-4 flex gap-4">
                    <a
                        href={siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-blue-500 py-2 px-4 text-white">
                            View Site
                        </button>
                    </a>
                    <a
                        href={codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gray-800 py-2 px-4 text-white">
                            View Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Modal;
