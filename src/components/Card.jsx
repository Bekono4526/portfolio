import React from "react";

function Card({ title, description, image }) {
    return (
        <div className="relative flex w-80 flex-col rounded-xl bg-white shadow-md">
            <div className="h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <div className="p-6">
                <h5 className="mb-2 text-xl font-semibold leading-snug text-dark-purple truncate">
                    {title || 'Tailwind Card'} {/* Tronquer le titre s'il est trop long */}
                </h5>
                <p className="text-base leading-relaxed text-gray-700 overflow-hidden text-ellipsis">
                    {description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.'}
                </p>
            </div>
            <div className="px-6 pt-0">
                <button type="button" className="rounded-lg bg-blue-500 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg">
                    Read More
                </button>
            </div>
        </div>
    );
}

export default Card;