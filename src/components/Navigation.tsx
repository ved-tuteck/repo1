import { Menu, X } from 'lucide-react';

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">TCS</div>
          </div>

          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</a>
            <a href="#industries" className="text-gray-700 hover:text-blue-600 font-medium transition">Industries</a>
            <a href="#careers" className="text-gray-700 hover:text-blue-600 font-medium transition">Careers</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
          </div>

          <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-medium">
            Get Started
          </button>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#services" className="block text-gray-700 hover:text-blue-600 py-2">Services</a>
            <a href="#industries" className="block text-gray-700 hover:text-blue-600 py-2">Industries</a>
            <a href="#careers" className="block text-gray-700 hover:text-blue-600 py-2">Careers</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 py-2">Contact</a>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
