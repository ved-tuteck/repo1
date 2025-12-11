import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const revenueByDomain = [
  { domain: 'Cloud Services', revenue: 145000, target: 150000 },
  { domain: 'Enterprise Solutions', revenue: 238000, target: 240000 },
  { domain: 'Digital Transformation', revenue: 189000, target: 185000 },
  { domain: 'IT Consulting', revenue: 156000, target: 160000 },
  { domain: 'Business Analytics', revenue: 201000, target: 210000 },
];

const revenueByService = [
  { name: 'Consulting', value: 285000, percentage: 28 },
  { name: 'Development', value: 312000, percentage: 31 },
  { name: 'Infrastructure', value: 198000, percentage: 20 },
  { name: 'Support & Maintenance', value: 134000, percentage: 13 },
  { name: 'Training', value: 71000, percentage: 8 },
];

const monthlyRevenue = [
  { month: 'Jan', revenue: 142000, target: 140000 },
  { month: 'Feb', revenue: 156000, target: 145000 },
  { month: 'Mar', revenue: 168000, target: 160000 },
  { month: 'Apr', revenue: 182000, target: 175000 },
  { month: 'May', revenue: 195000, target: 190000 },
  { month: 'Jun', revenue: 214000, target: 210000 },
  { month: 'Jul', revenue: 228000, target: 220000 },
  { month: 'Aug', revenue: 242000, target: 235000 },
  { month: 'Sep', revenue: 256000, target: 250000 },
  { month: 'Oct', revenue: 267000, target: 265000 },
  { month: 'Nov', revenue: 289000, target: 280000 },
  { month: 'Dec', revenue: 312000, target: 310000 },
];

const COLORS = ['#1e40af', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'];

export default function Sales() {
  const totalRevenue = revenueByService.reduce((sum, item) => sum + item.value, 0);
  const totalTarget = monthlyRevenue[monthlyRevenue.length - 1].target;

  return (
    <section id="sales" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sales Analytics</h2>
          <p className="text-xl text-gray-600">Comprehensive revenue insights across domains and services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
            <p className="text-gray-600 text-sm mb-2">Total Annual Revenue</p>
            <p className="text-3xl font-bold text-blue-600">${(totalRevenue / 1000).toFixed(0)}K</p>
            <p className="text-green-600 text-sm mt-2">↑ 15% from last year</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
            <p className="text-gray-600 text-sm mb-2">Annual Target</p>
            <p className="text-3xl font-bold text-blue-600">${(totalTarget / 1000).toFixed(0)}K</p>
            <p className="text-blue-600 text-sm mt-2">On track for Q4</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
            <p className="text-gray-600 text-sm mb-2">Average Monthly Revenue</p>
            <p className="text-3xl font-bold text-blue-600">${(totalRevenue / 12 / 1000).toFixed(0)}K</p>
            <p className="text-green-600 text-sm mt-2">↑ 12% growth rate</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue by Domain</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueByDomain}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="domain" angle={-45} textAnchor="end" height={100} tick={{ fill: '#6b7280', fontSize: 12 }} />
                <YAxis tick={{ fill: '#6b7280' }} />
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                <Legend />
                <Bar dataKey="revenue" fill="#2563eb" name="Actual Revenue" />
                <Bar dataKey="target" fill="#93c5fd" name="Target" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue Distribution by Service</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={revenueByService} cx="50%" cy="50%" labelLine={false} label={({ name, percentage }) => `${name}: ${percentage}%`} outerRadius={80} fill="#8884d8" dataKey="value">
                  {revenueByService.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} formatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Monthly Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fill: '#6b7280' }} />
              <YAxis tick={{ fill: '#6b7280' }} />
              <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} formatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} dot={{ fill: '#2563eb', r: 5 }} name="Actual Revenue" />
              <Line type="monotone" dataKey="target" stroke="#93c5fd" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#93c5fd', r: 4 }} name="Target" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
