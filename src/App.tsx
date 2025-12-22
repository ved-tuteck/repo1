import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import Sales from './components/Sales';
import Careers from './components/Careers';
import Footer from './components/Footer';
import Reviews from './components/Reviews';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/reviews') {
      setCurrentPage('reviews');
    } else {
      setCurrentPage('home');
    }
  }, []);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    if (page === 'reviews') {
      window.history.pushState({}, '', '/reviews');
    } else {
      window.history.pushState({}, '', '/');
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} onNavigate={handleNavigation} />
      {currentPage === 'reviews' ? (
        <Reviews />
      ) : (
        <>
          <Hero />
          <Services />
          <Industries />
          <Sales />
          <Careers />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
