
import React from 'react';

function Modal({ children, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-purple bg-opacity-50">
            <div className="bg-dark-blue p-8 rounded-lg shadow-lg relative">
                <button
                    className="absolute top-2 right-2 text-2xl font-bold"
                    onClick={onClose}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
