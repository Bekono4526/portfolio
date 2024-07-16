import React, { useRef, useEffect, useState } from "react";
import Card from "./Card";

function Portfolio() {
    const scrollRef = useRef(null);
    const [scrollDirection, setScrollDirection] = useState('right');
    const [manualScroll, setManualScroll] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!manualScroll) {
                const container = scrollRef.current;
                if (container) {
                    if (scrollDirection === 'right') {
                        if (container.scrollLeft >= container.scrollWidth - container.offsetWidth) {
                            setScrollDirection('left'); // Change direction to left
                        } else {
                            container.scrollLeft += 1; // Increment the scroll position
                        }
                    } else { // Handling left scroll
                        if (container.scrollLeft <= 0) {
                            setScrollDirection('right'); // Change direction to right
                        } else {
                            container.scrollLeft -= 1; // Decrement the scroll position
                        }
                    }
                }
            }
        }, 20); // Adjust timing to control scroll speed

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [scrollDirection, manualScroll]);

    const handleManualScroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = container.offsetWidth;
        if (direction === 'left') {
            container.scrollLeft -= scrollAmount;
        } else {
            container.scrollLeft += scrollAmount;
        }
        setManualScroll(true);
        setTimeout(() => setManualScroll(false), 2000); // Resume automatic scrolling after 2 seconds
    };

    return (
        <section id="portfolio" className="bg-darker-blue text-white relative">
            <h2 className="text-center text-2xl font-bold mb-4">Portfolio</h2>
            <p className="text-center mb-6">Voici les projets que j'ai réalisés.</p>
            <button onClick={() => handleManualScroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-dark-blue text-white z-10 flex items-center justify-center rounded-full">
                &#10094; {/* Left arrow symbol */}
            </button>
            <div ref={scrollRef} className="flex overflow-x-auto whitespace-nowrap scroll-smooth gap-4">
                {/* Cards here */}
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <button onClick={() => handleManualScroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-dark-blue text-white z-10 flex items-center justify-center rounded-full">
                &#10095; {/* Right arrow symbol */}
            </button>
        </section>
    );
}

export default Portfolio;
