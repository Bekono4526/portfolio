import React from "react";

function Card({ title, description, image, onReadMore }) {
    const hasValidImage = image && image.trim() !== '';
    const shortDescription = description ? description.split(' ').slice(0, 3).join(' ') + '...' : 'No description available.';

    return (
        <div className="relative flex flex-col rounded-xl bg-white shadow-md mb-10 w-full sm:w-80 md:w-96">
            <div className="h-40 sm:h-48 md:h-56 overflow-hidden rounded-t-xl flex justify-center items-center bg-gray-200">
                {hasValidImage ? (
                    <img
                        src={image}
                        alt={title}
                        className="object-cover w-full h-full"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-r from-vert to-violet flex items-center justify-center">
                        <span className="text-gray-500 cursor-default">No Image</span>
                    </div>
                )}
            </div>
            <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <h5 className="mb-2 text-lg sm:text-xl font-semibold leading-snug text-dark-purple truncate cursor-default">
                    {title || 'Tailwind Card'}
                </h5>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700 overflow-hidden text-ellipsis flex-grow cursor-default">
                    {shortDescription}
                </p>
            </div>
            <div className="px-4 sm:px-6 pt-0 mb-2">
                <button
                    type="button"
                    onClick={onReadMore}
                    className="rounded-lg bg-dark-violet py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg"
                >
                    Read More
                </button>
            </div>
        </div>
    );
}

export default Card;
