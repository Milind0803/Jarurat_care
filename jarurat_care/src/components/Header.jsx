import React from "react";
import { Heart } from "lucide-react";

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">
              Jarurat Care
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => setCurrentPage("home")}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentPage === "home"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage("patients")}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentPage === "patients"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Patients
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentPage === "about"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              About
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex space-x-3">
            <button
              onClick={() => setCurrentPage("home")}
              className={`px-2 py-1 text-xs font-medium transition-colors rounded ${
                currentPage === "home"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage("patients")}
              className={`px-2 py-1 text-xs font-medium transition-colors rounded ${
                currentPage === "patients"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              Patients
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className={`px-2 py-1 text-xs font-medium transition-colors rounded ${
                currentPage === "about"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              About
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
