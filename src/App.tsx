import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import Careers from './components/Careers';
import Footer from './components/Footer';
import Sales from './components/Sales';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/sales') {
      setCurrentPage('sales');
    } else {
      setCurrentPage('home');
    }
  }, []);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    if (page === 'sales') {
      window.history.pushState({}, '', '/sales');
    } else {
      window.history.pushState({}, '', '/');
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} onNavigate={handleNavigation} />
      {currentPage === 'sales' ? (
        <Sales />
      ) : (
        <>
          <Hero />
          <Services />
          <Industries />
          <Careers />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
