
import { useEffect, useState } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Explorez la Nature",
    description: "Découvrez des paysages à couper le souffle"
  },
  {
    url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Destinations de Rêve",
    description: "Des voyages inoubliables vous attendent"
  },
  {
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Aventures Uniques",
    description: "Créez des souvenirs exceptionnels"
  }
];

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-1000 transform ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-10000 hover:scale-110"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40">
              <div className="container mx-auto h-full flex items-center justify-center">
                <div className="text-center text-white animate-fade-in">
                  <h2 className="text-5xl font-bold mb-4">{image.title}</h2>
                  <p className="text-xl">{image.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
