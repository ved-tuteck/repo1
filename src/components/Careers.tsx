import { Briefcase, Globe, Award, Target } from 'lucide-react';

export default function Careers() {
  return (
    <section id="careers" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Build Your Career With Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join a global organization of 500,000+ employees where innovation thrives and talent is nurtured. At TCS, we invest in your growth and provide opportunities to work on cutting-edge technologies.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600">
                    <Globe className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Global Opportunities</h3>
                  <p className="text-gray-600">Work across 150+ countries and collaborate with diverse teams.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600">
                    <Award className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Continuous Learning</h3>
                  <p className="text-gray-600">Access to upskilling programs and certifications for career growth.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600">
                    <Target className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Innovation Focus</h3>
                  <p className="text-gray-600">Work on transformative projects that shape the future of technology.</p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              Explore Careers
            </button>
          </div>

          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team collaboration"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
