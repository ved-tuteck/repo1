import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import Sales from './components/Sales';
import Careers from './components/Careers';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <Services />
      <Industries />
      <Sales />
      <Careers />
      <Footer />
    </div>
  );
}

export default App;
