import React from 'react';
import { FaLink, FaUsers, FaMousePointer, FaGlobeAmericas } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    {
      icon: <FaLink className="text-4xl text-blue-600" />,
      value: '1.2M+',
      label: 'Links Shortened',
      description: 'and counting',
    },
    {
      icon: <FaUsers className="text-4xl text-green-500" />,
      value: '50K+',
      label: 'Active Users',
      description: 'worldwide',
    },
    {
      icon: <FaMousePointer className="text-4xl text-purple-500" />,
      value: '500M+',
      label: 'Total Clicks',
      description: 'redirected',
    },
    {
      icon: <FaGlobeAmericas className="text-4xl text-cyan-500" />,
      value: '150+',
      label: 'Countries',
      description: 'served',
    },
  ];

  return (
    <section id="analytics" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Echo by the Numbers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Trusted by businesses and individuals worldwide</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-lg mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-medium text-gray-700 mb-1">{stat.label}</div>
              <div className="text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to boost your link performance?</h3>
              <p className="text-blue-100">Join thousands of satisfied users today.</p>
            </div>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
              Get Started For Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;