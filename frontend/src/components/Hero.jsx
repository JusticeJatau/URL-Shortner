import React from 'react';
import { FaBolt, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Shorten Your <span className="text-blue-600">Links</span> with Echo
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Create short, memorable URLs in seconds. Track clicks, analyze performance, and optimize your links.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              <FaBolt className="mr-2" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full">
              <FaChartLine className="mr-2" />
              <span>Advanced Analytics</span>
            </div>
            <div className="flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              <FaShieldAlt className="mr-2" />
              <span>Secure & Reliable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;