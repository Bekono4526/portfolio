import React, { useRef, useEffect, useState } from "react";
import Card from "./Card";

function Portfolio() {
    const scrollRef = useRef(null);
    const [scrollDirection, setScrollDirection] = useState('right');
    const [manualScroll, setManualScroll] = useState(false);
    const [cards, setCards] = useState([
        { id: 1, title: "Projet 1", description: "Description 1", image: "text1.png" },
        { id: 2, title: "Projet 2", description: "Description 2", image: "" },
        { id: 3, title: "Projet 3", description: "Description 3", image: "" },
        { id: 4, title: "Projet 4", description: "Description 4", image: "" },
        { id: 5, title: "Projet 5", description: "Description 5", image: "" },
        // Ajoutez d'autres cartes selon vos besoins
    ]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!manualScroll) {
                const container = scrollRef.current;
                if (container) {
                    if (scrollDirection === 'right') {
                        if (container.scrollLeft >= container.scrollWidth - container.offsetWidth) {
                            setScrollDirection('left');
                        } else {
                            container.scrollLeft += 1;
                        }
                    } else {
                        if (container.scrollLeft <= 0) {
                            setScrollDirection('right');
                        } else {
                            container.scrollLeft -= 1;
                        }
                    }
                }
            }
        }, 20);

        return () => clearInterval(intervalId);
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
        setTimeout(() => setManualScroll(false), 2000);
    };

    const updateCard = (id, title, description, image) => {
        const updatedCards = cards.map(card => {
            if (card.id === id) {
                return { ...card, title, description, image };
            }
            return card;
        });
        setCards(updatedCards);
    };

    return (
        <section id="portfolio" className="bg-dark-blue text-white relative py-8">
            <h2 className="text-center text-2xl font-bold mb-4">Portfolio</h2>
            <p className="text-center mb-6">Voici les projets que j'ai réalisés.</p>
            <button onClick={() => handleManualScroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-dark-blue text-white z-10 flex items-center justify-center rounded-full">
                &#10094;
            </button>
            <div ref={scrollRef} className="flex overflow-x-auto whitespace-nowrap scroll-smooth gap-4 px-10">
                {cards.map((card) => (
                    <div className="min-w-80 flex-shrink-0" key={card.id}>
                        <Card
                            title={card.title}
                            description={card.description}
                            image={card.image}
                            onUpdate={(title, desc, img) => updateCard(card.id, title, desc, img)}
                        />
                    </div>
                ))}
            </div>
            <button onClick={() => handleManualScroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-dark-blue text-white z-10 flex items-center justify-center rounded-full">
                &#10095;
            </button>
        </section>
    );
}

export default Portfolio;
