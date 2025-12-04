import { Building2, ShoppingCart, DollarSign, Pill, Zap, Plane } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    name: 'Banking & Financial Services',
    description: 'Secure digital solutions for modern financial institutions.',
  },
  {
    icon: ShoppingCart,
    name: 'Retail & E-commerce',
    description: 'Transform customer experience with connected retail solutions.',
  },
  {
    icon: DollarSign,
    name: 'Insurance',
    description: 'Drive innovation and efficiency in insurance operations.',
  },
  {
    icon: Pill,
    name: 'Healthcare & Pharma',
    description: 'Advanced technology for healthcare transformation.',
  },
  {
    icon: Zap,
    name: 'Energy & Utilities',
    description: 'Smart solutions for sustainable energy management.',
  },
  {
    icon: Plane,
    name: 'Travel & Hospitality',
    description: 'Enhance guest experiences with digital innovation.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deep industry expertise combined with global technology capabilities to drive transformation across sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <div key={idx} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
              <div className="mb-4 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <industry.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
