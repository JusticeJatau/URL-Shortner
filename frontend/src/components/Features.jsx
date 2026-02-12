import React from 'react';
import { FaRocket, FaChartPie, FaLock, FaPalette, FaMobileAlt, FaGlobe } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaRocket className="text-3xl text-blue-600" />,
      title: 'Lightning Fast',
      description: 'Create short links in milliseconds with our optimized infrastructure.',
    },
    {
      icon: <FaChartPie className="text-3xl text-green-500" />,
      title: 'Advanced Analytics',
      description: 'Track clicks, geographic locations, devices, and referral sources.',
    },
    {
      icon: <FaLock className="text-3xl text-purple-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.',
    },
    {
      icon: <FaPalette className="text-3xl text-pink-500" />,
      title: 'Custom Branding',
      description: 'Use your own domain and customize link appearance.',
    },
    {
      icon: <FaMobileAlt className="text-3xl text-orange-500" />,
      title: 'Mobile Optimized',
      description: 'Fully responsive dashboard and mobile-friendly short links.',
    },
    {
      icon: <FaGlobe className="text-3xl text-cyan-500" />,
      title: 'Global Infrastructure',
      description: 'Servers worldwide ensure fast redirects anywhere.',
    },
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Echo?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Powerful features designed to simplify your link management</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;