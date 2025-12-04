import { Cloud, Code, BarChart3, Lock, Zap, Users } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Migrate, modernize, and manage your infrastructure with enterprise-grade cloud solutions.',
  },
  {
    icon: Code,
    title: 'Application Development',
    description: 'Build scalable, secure applications tailored to your business needs with cutting-edge technology.',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and business intelligence.',
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security solutions and threat management.',
  },
  {
    icon: Zap,
    title: 'AI & Automation',
    description: 'Leverage artificial intelligence and automation to optimize operations and reduce costs.',
  },
  {
    icon: Users,
    title: 'Consulting Services',
    description: 'Strategic guidance from industry experts to drive digital transformation initiatives.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology and consulting services designed to drive your digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-blue-300 transition duration-300">
              <div className="mb-4 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition">
                <service.icon className="text-blue-600 group-hover:text-white transition" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a href="#" className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-700 transition">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
