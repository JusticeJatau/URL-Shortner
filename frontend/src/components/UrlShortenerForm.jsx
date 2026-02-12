import React, { useState } from 'react';
import { FaLink, FaCopy, FaQrcode } from 'react-icons/fa';

const UrlShortenerForm = () => {
  const [originalUrl, setoriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!originalUrl) return;
    console.log(BASE_URL)
    
    setLoading(true);
    try{
      const request = await fetch("http://localhost:5000/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body:JSON.stringify({originalUrl})
      })

      const response = await request.json()
      const url = `${BASE_URL}/s/${response.token}`
      setShortUrl(url);

    }catch(error){
      console.log(error)
    }finally{
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerateQR = () => {
    alert('QR code would be generated here!');
  };

  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Shorten Your URL</h2>
              <p className="text-gray-600">Paste your long URL below to create a short Echo link</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Destination URL</label>
                <div className="relative">
                  <FaLink className="absolute left-4 top-4 text-gray-400" />
                  <input
                    type="url"
                    value={originalUrl}
                    onChange={(e) => setoriginalUrl(e.target.value)}
                    placeholder="https://example.com/very-long-url-that-needs-shortening"
                    className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              {/* <div>
                <label className="block text-gray-700 mb-2 font-medium">Custom Alias (Optional)</label>
                <div className="flex">
                  <div className="flex items-center bg-gray-100 px-4 rounded-l-lg border border-r-0 border-gray-300">
                    <span className="text-gray-600">echo.ly/</span>
                  </div>
                  <input
                    type="text"
                    value={customAlias}
                    onChange={(e) => setCustomAlias(e.target.value)}
                    placeholder="my-custom-link"
                    className="flex-grow p-4 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">Leave empty for auto-generated alias</p>
              </div> */}
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 flex justify-center items-center"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Shortening...
                  </>
                ) : (
                  'Create Echo Link'
                )}
              </button>
            </form>
            
            {shortUrl && (
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-bold text-lg mb-2 text-green-800">Your Echo Link is Ready!</h3>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-grow bg-white p-4 rounded-lg border border-green-300">
                    <div className="flex items-center">
                      <FaLink className="text-green-500 mr-2" />
                      <a 
                        href={shortUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-700 font-medium hover:underline break-all"
                      >
                        {shortUrl}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopy}
                      className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center"
                    >
                      <FaCopy className="mr-2" />
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                    <button
                      onClick={handleGenerateQR}
                      className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center"
                    >
                      <FaQrcode className="mr-2" />
                      QR Code
                    </button>
                  </div>
                </div>
                <p className="text-sm text-green-600 mt-3">
                  <span className="font-medium">Original URL:</span> {originalUrl.substring(0, 60)}...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrlShortenerForm;