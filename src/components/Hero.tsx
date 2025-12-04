import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-slate-50 pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Transform Your Business with Digital Innovation
            </h1>
            <p className="text-lg text-gray-600">
              Tata Consultancy Services enables businesses to reimagine processes, accelerate innovation, and unlock new growth opportunities with cutting-edge technology solutions.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center gap-2">
                Explore Solutions <ArrowRight size={20} />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur-lg opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Digital transformation"
                className="relative rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
