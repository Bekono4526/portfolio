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
      title: "Test",
      description: "Ce projet est un portfolio personnel, conçu pour présenter mes compétences, mes projets et mon parcours professionnel. Il a été développé en utilisant les technologies modernes telles que React pour la création de l'interface utilisateur et Tailwind CSS pour le style. L'objectif principal de ce projet est de fournir une plateforme professionnelle où les employeurs potentiels et les collaborateurs peuvent découvrir mon travail, en savoir plus sur moi et accéder facilement à mes projets déployés ainsi qu'à leur code source.",
      image: "text1.png",
      siteUrl: "https://example.com",
      codeUrl: "https://github.com/Bekono4526/portfolio",
    },
    {
      id: 2,
      title: "Projet 2",
      description: "Description détaillée du projet 2",
      image: "",
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
            if (
              container.scrollLeft >=
              container.scrollWidth - container.offsetWidth
            ) {
              setScrollDirection("left");
            } else {
              container.scrollLeft += 1;
            }
          } else {
            if (container.scrollLeft <= 0) {
              setScrollDirection("right");
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
    <section id="portfolio" className="bg-dark-blue text-white relative py-4">
      <h2 className="text-left text-2xl font-bold mb-10 ml-20">Projects</h2>
      <button
        onClick={() => handleManualScroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-dark-blue text-white z-10 flex items-center justify-center rounded-full"
      >
        &#10094;
      </button>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto whitespace-nowrap scroll-smooth gap-4 px-10 scroll-container"
      >
        {cards.map((card) => (
          <div className="min-w-80 flex-shrink-0" key={card.id}>
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
        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-dark-blue text-white z-10 flex items-center justify-center rounded-full"
      >
        &#10095;
      </button>
      {selectedCard && (
        <Modal onClose={() => setSelectedCard(null)}>
          <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
          <p>{selectedCard.description}</p>
          <div className="mt-4 flex gap-4">
            <a
              href={selectedCard.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-lg bg-blue-500 py-2 px-4 text-white">
                View Site
              </button>
            </a>
            <a
              href={selectedCard.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-lg bg-gray-800 py-2 px-4 text-white">
                View Code
              </button>
            </a>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default Portfolio;
