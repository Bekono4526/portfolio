
import React from "react";

function Card({ title, description, image, onReadMore }) {
    const hasValidImage = image && image.trim() !== '';

    return (
        <div className="relative flex flex-col rounded-xl bg-white shadow-md mb-10 w-full sm:w-80">
            <div
                className="h-40 overflow-hidden rounded-t-xl"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: hasValidImage ? `url(${image})` : 'none'
                }}
            >
                {!hasValidImage && (
                    <div className="w-full h-full bg-gradient-to-r from-vert to-violet"></div>
                )}
            </div>
            <div className="p-4 sm:p-6">
                <h5 className="mb-2 text-lg sm:text-xl font-semibold leading-snug text-dark-purple truncate">
                    {title || 'Tailwind Card'}
                </h5>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700 overflow-hidden text-ellipsis">
                    {description ? description.slice(0, 100) + '...' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.'}
                </p>
            </div>
            <div className="px-4 sm:px-6 pt-0 mb-2">
                <button
                    type="button"
                    onClick={onReadMore}
                    className="rounded-lg bg-dark-violet py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg"
                >
                    Read More
                </button>
            </div>
        </div>
    );
}

export default Card;
