import React from 'react';
import { FaLink, FaTwitter, FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FaLink className="text-2xl text-blue-600" />
              <h2 className="text-2xl font-bold">Echo<span className="text-blue-600">.</span></h2>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The modern URL shortener with powerful analytics and enterprise-grade reliability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><FaTwitter /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaFacebook /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaLinkedin /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaGithub /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaInstagram /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Echo URL Shortener. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;