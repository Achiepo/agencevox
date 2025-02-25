
import { Navigation } from "@/components/Navigation";
import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const destinations = [
  {
    id: "canada",
    name: "Canada",
    image: "https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Découvrez les grands espaces et la nature sauvage"
  },
  {
    id: "france",
    name: "France",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Art, culture et gastronomie au rendez-vous"
  },
  {
    id: "chine",
    name: "Chine",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Une civilisation millénaire à explorer"
  },
  {
    id: "belgique",
    name: "Belgique",
    image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Charme médiéval et modernité"
  },
  {
    id: "norvege",
    name: "Norvège",
    image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Fjords majestueux et aurores boréales"
  },
  {
    id: "russie",
    name: "Russie",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Histoire riche et paysages infinis"
  },
  {
    id: "espagne",
    name: "Espagne",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Soleil, culture et passion"
  },
  {
    id: "etats-unis",
    name: "États-Unis",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Des côtes aux gratte-ciels"
  },
];

const Index = () => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Carousel />
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Nos Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Voyages Sur Mesure",
                  description: "Des itinéraires personnalisés selon vos envies et votre budget"
                },
                {
                  title: "Destinations Exclusives",
                  description: "Découvrez des lieux uniques et authentiques à travers le monde"
                },
                {
                  title: "Service Premium",
                  description: "Un accompagnement personnalisé tout au long de votre voyage"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Nos Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
                  onClick={() => setSelectedDestination(destination.id)}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-1">{destination.name}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {destination.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedDestination && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
              <div className="bg-white rounded-lg max-w-2xl w-full p-6 transform transition-all duration-300 animate-scale-in">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">
                    {destinations.find(d => d.id === selectedDestination)?.name}
                  </h3>
                  <button
                    onClick={() => setSelectedDestination(null)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={destinations.find(d => d.id === selectedDestination)?.image}
                    alt={destinations.find(d => d.id === selectedDestination)?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600">
                  {destinations.find(d => d.id === selectedDestination)?.description}
                </p>
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
