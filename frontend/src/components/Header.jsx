import React from 'react';
import { FaLink } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaLink className="text-blue-600 text-2xl" />
            <h1 className="text-2xl font-bold text-gray-900">Echo<span className="text-blue-600">.</span></h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#analytics" className="text-gray-600 hover:text-blue-600 transition-colors">Analytics</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-blue-600 hover:text-blue-700 font-medium">Login</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;