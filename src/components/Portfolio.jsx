import React, { useRef, useEffect, useState } from "react";
import Card from "./Card";
import Modal from "./Modal";

function Portfolio() {
  const scrollRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("right");
  const [manualScroll, setManualScroll] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Dabali-project",
      description: "j'ai recodé le site de Dabali express en utilisant React et Tailwind CSS",
      image: "cute.webp",
      siteUrl: "https://dabali-project.netlify.app",
      codeUrl: "https://github.com/Bekono4526/Dabali-project",
    },
    {
      id: 2,
      title: "Projet 2",
      description: "Description détaillée du projet 2",
      image: "cute.webp",
      siteUrl: "https://example.com",
      codeUrl: "https://github.com/username/example-project2",
    },
    {
      id: 3,
      title: "Projet 3",
      description: "Description détaillée du projet 3",
      image: "",
      siteUrl: "https://example.com",
      codeUrl: "https://github.com/username/example-project3",
    },
    {
      id: 4,
      title: "Projet 4",
      description: "Description détaillée du projet 4",
      image: "",
      siteUrl: "https://example.com",
      codeUrl: "https://github.com/username/example-project4",
    },
    {
      id: 5,
      title: "Projet 5",
      description: "Description détaillée du projet 5",
      image: "",
      siteUrl: "https://example.com",
      codeUrl: "https://github.com/username/example-project5",
    },
    // Ajoutez d'autres cartes selon vos besoins
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!manualScroll) {
        const container = scrollRef.current;
        if (container) {
          if (scrollDirection === "right") {
            if (container.scrollLeft >= container.scrollWidth - container.offsetWidth - 1) {
              setScrollDirection("left");
            } else {
              container.scrollLeft += 2; // Augmenter cette valeur pour un défilement plus rapide
            }
          } else {
            if (container.scrollLeft <= 1) {
              setScrollDirection("right");
            } else {
              container.scrollLeft -= 2; // Augmenter cette valeur pour un défilement plus rapide
            }
          }
        }
      }
    }, 100); // Augmenter l'intervalle de temps

    return () => clearInterval(intervalId);
  }, [scrollDirection, manualScroll]);

  const handleManualScroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth;
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
    setManualScroll(true);
    setTimeout(() => setManualScroll(false), 2000);
  };

  const updateCard = (id, title, description, image, siteUrl, codeUrl) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, title, description, image, siteUrl, codeUrl };
      }
      return card;
    });
    setCards(updatedCards);
  };

  return (
    <section id="projets" className="relative p-6 md:p-1 pt-20 md:pt-20 bg-dark-blue text-white">
      <h2 className="mx-auto ml-20 text-xl md:text-2xl font-bold text-white font-custom mb-4 md:mb-6 mt-4 text-center md:text-left cursor-default hidden md:block">
        Projets
      </h2>
      <button
        onClick={() => handleManualScroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-dark-blue text-white z-10 flex items-center justify-center rounded-full hover:bg-white-opacity-20 "
      >
        &#10094;
      </button>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto whitespace-nowrap scroll-smooth gap-4 px-10 scroll-container"
        style={{ willChange: "scroll-position" }} // Ajout de will-change
      >
        {cards.map((card) => (
          <div className="min-w-full sm:min-w-80 flex-shrink-0" key={card.id}>
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
              siteUrl={card.siteUrl}
              codeUrl={card.codeUrl}
              onReadMore={() => setSelectedCard(card)}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => handleManualScroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-dark-blue text-white z-10 flex items-center justify-center rounded-full hover:bg-white-opacity-20 "
      >
        &#10095;
      </button>
      {selectedCard && (
        <Modal
          title={selectedCard.title}
          description={selectedCard.description}
          siteUrl={selectedCard.siteUrl}
          codeUrl={selectedCard.codeUrl}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </section>
  );
}

export default Portfolio;
