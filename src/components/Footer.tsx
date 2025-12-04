import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">TCS</h3>
            <p className="text-sm leading-relaxed">
              Transforming global business through technology and consulting expertise.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Cloud Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">AI & Automation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Data Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Newsroom</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Events</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Investors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@tcs.com</span>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>25 West 52nd Street, New York, NY 10019</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; 2024 Tata Consultancy Services. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
