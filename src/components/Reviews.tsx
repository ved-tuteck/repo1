import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechFlow Solutions',
    role: 'CTO',
    content: 'The cloud migration services were exceptional. The team understood our complex infrastructure requirements and delivered a seamless transition with zero downtime. Their expertise in enterprise solutions saved us thousands in potential losses.',
    rating: 5,
    avatar: 'SJ',
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Global Finance Corp',
    role: 'Operations Director',
    content: 'Outstanding IT consulting! They helped us optimize our operations and reduce costs by 40%. The team was professional, responsive, and provided excellent support throughout the entire project.',
    rating: 5,
    avatar: 'MC',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    company: 'Innovation Labs',
    role: 'Project Manager',
    content: 'The digital transformation solutions transformed how we work. They modernized our legacy systems and implemented cutting-edge tools. The training provided by their team ensured smooth adoption across all departments.',
    rating: 5,
    avatar: 'ER',
  },
  {
    id: 4,
    name: 'David Thompson',
    company: 'Enterprise Holdings',
    role: 'VP Technology',
    content: 'Exceptional business analytics platform. We now have real-time insights into our operations that drive better decision-making. The dashboards are intuitive and the support team is incredibly responsive to our needs.',
    rating: 5,
    avatar: 'DT',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    company: 'Digital Pioneers',
    role: 'CEO',
    content: 'Their consulting team brought strategic clarity to our infrastructure challenges. They didn\'t just provide solutions—they educated our team on best practices. The long-term value we\'ve gained far exceeds our initial expectations.',
    rating: 5,
    avatar: 'LA',
  },
  {
    id: 6,
    name: 'James Wilson',
    company: 'Strategic Systems Inc',
    role: 'Development Lead',
    content: 'Top-notch development and infrastructure management. The team delivered our project on time and within budget while maintaining excellent code quality. Their proactive approach to maintenance has minimized downtime significantly.',
    rating: 5,
    avatar: 'JW',
  },
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Customer Reviews</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our clients about their transformative experiences and the value we've delivered to their organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 p-8 flex flex-col"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                "{review.content}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{review.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
            Join hundreds of organizations already experiencing the benefits of our comprehensive solutions.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}
