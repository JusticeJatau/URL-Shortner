import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import UrlShortenerForm from '../components/UrlShortenerForm';
import Features from '../components/Features';
import RecentLinks from '../components/RecentLinks';
import Stats from '../components/Stats';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <UrlShortenerForm />
        <RecentLinks />
        <Features />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}

export default Home;