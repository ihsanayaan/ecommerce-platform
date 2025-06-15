import { useState } from 'react';
import AdminSidebar from '../../components/vendor/AdminSidebar';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data
  const stats = [
    { name: 'Total Sales', value: '$24,560', change: '+12%', trend: 'up' },
    { name: 'Total Orders', value: '1,234', change: '+5%', trend: 'up' },
    { name: 'Total Products', value: '567', change: '-2%', trend: 'down' },
    { name: 'Total Customers', value: '8,910', change: '+8%', trend: 'up' }
  ];

  const recentOrders = [
    { id: '#1234', customer: 'John Doe', date: '2023-10-15', amount: '$99.99', status: 'Shipped' },
    { id: '#1235', customer: 'Jane Smith', date: '2023-10-14', amount: '$199.99', status: 'Processing' },
    { id: '#1236', customer: 'Robert Johnson', date: '2023-10-14', amount: '$59.99', status: 'Delivered' },
    { id: '#1237', customer: 'Emily Davis', date: '2023-10-13', amount: '$79.99', status: 'Cancelled' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <div className={`flex items-center mt-2 text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  )}
                  <span>{stat.change} from last month</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Recent Orders</h2>
              <button className="text-primary hover:underline">View All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Order ID</th>
                    <th className="text-left py-3 px-4">Customer</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Amount</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{order.id}</td>
                      <td className="py-3 px-4">{order.customer}</td>
                      <td className="py-3 px-4">{order.date}</td>
                      <td className="py-3 px-4">{order.amount}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-primary hover:underline">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Recent Products */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Recent Products</h2>
              <button className="text-primary hover:underline">View All</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex">
                    <div className="w-20 h-20 bg-gray-200 rounded mr-4"></div>
                    <div>
                      <h3 className="font-medium">Product Name {item}</h3>
                      <p className="text-gray-600 text-sm mt-1">Category: Electronics</p>
                      <p className="text-primary font-bold mt-2">$99.99</p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button className="text-sm text-gray-600 hover:underline">Edit</button>
                    <button className="text-sm text-red-600 hover:underline">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;