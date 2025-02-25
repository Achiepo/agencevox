
import { Phone, Mail, MapPin } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="w-full bg-white shadow-sm animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-semibold text-blue-600">VoyageXplore</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Accueil</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Destinations</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Contact</a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              <span>01 23 45 67 89</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
