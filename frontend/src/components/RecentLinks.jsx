import React from 'react';
import { FaCopy, FaChartBar, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

const RecentLinks = () => {
  const recentLinks = [
    {
      id: 1,
      shortUrl: 'echo.ly/business',
      originalUrl: 'https://example.com/business-strategy-2023',
      clicks: 142,
      date: '2023-10-15',
    },
    {
      id: 2,
      shortUrl: 'echo.ly/product-demo',
      originalUrl: 'https://example.com/product-demo-video-tutorial',
      clicks: 89,
      date: '2023-10-10',
    },
    {
      id: 3,
      shortUrl: 'echo.ly/sale',
      originalUrl: 'https://example.com/black-friday-sale-announcement',
      clicks: 245,
      date: '2023-10-05',
    },
    {
      id: 4,
      shortUrl: 'echo.ly/blog',
      originalUrl: 'https://example.com/blog-post-about-url-shortening',
      clicks: 67,
      date: '2023-10-01',
    },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(`https://${text}`);
    alert('Link copied to clipboard!');
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Recently Created Links</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">See examples of Echo links created by our users</p>
        </div>
        
        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-4 px-6 text-left">Short URL</th>
                <th className="py-4 px-6 text-left hidden md:table-cell">Original URL</th>
                <th className="py-4 px-6 text-left">Clicks</th>
                <th className="py-4 px-6 text-left hidden sm:table-cell">Created</th>
                <th className="py-4 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentLinks.map((link) => (
                <tr key={link.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-blue-600">
                    {link.shortUrl}
                  </td>
                  <td className="py-4 px-6 hidden md:table-cell text-gray-600 truncate max-w-xs">
                    {link.originalUrl}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <FaChartBar className="text-green-500 mr-2" />
                      <span className="font-medium">{link.clicks}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 hidden sm:table-cell">
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-gray-400 mr-2" />
                      {link.date}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleCopy(link.shortUrl)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                        title="Copy"
                      >
                        <FaCopy />
                      </button>
                      <a
                        href={`https://${link.shortUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-green-500 hover:bg-green-50 rounded-lg"
                        title="Open"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-3 px-6 rounded-lg transition-all duration-300">
            View All Links
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentLinks;