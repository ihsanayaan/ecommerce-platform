import { useState } from 'react';
import VendorSidebar from '../../components/vendor/AdminSidebar';

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data
  const stats = [
    { name: 'Total Sales', value: '$12,345', change: '+8%', trend: 'up' },
    { name: 'Total Orders', value: '456', change: '+3%', trend: 'up' },
    { name: 'Total Products', value: '78', change: '0%', trend: 'neutral' },
    { name: 'Total Reviews', value: '123', change: '+15%', trend: 'up' }
  ];

  const recentProducts = [
    { id: 1, name: 'Wireless Headphones', stock: 15, price: '$99.99', sales: 45 },
    { id: 2, name: 'Smart Watch', stock: 8, price: '$199.99', sales: 32 },
    { id: 3, name: 'Bluetooth Speaker', stock: 0, price: '$59.99', sales: 28 },
    { id: 4, name: 'Gaming Keyboard', stock: 12, price: '$79.99', sales: 18 }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <VendorSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-6">Vendor Dashboard</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <div className={`flex items-center mt-2 text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 
                  stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  ) : stat.trend === 'down' ? (
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  ) : null}
                  <span>{stat.change} from last month</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Recent Products */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Products</h2>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
                Add Product
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Product</th>
                    <th className="text-left py-3 px-4">Price</th>
                    <th className="text-left py-3 px-4">Stock</th>
                    <th className="text-left py-3 px-4">Sales</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentProducts.map((product, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-200 rounded mr-3"></div>
                          <span>{product.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{product.price}</td>
                      <td className="py-3 px-4">
                        <span className={`font-medium ${
                          product.stock === 0 ? 'text-red-600' : 
                          product.stock < 5 ? 'text-yellow-600' : 'text-green-600'
                        }`}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="py-3 px-4">{product.sales}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          product.stock === 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {product.stock === 0 ? 'Out of Stock' : 'Active'}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:underline">Edit</button>
                          <button className="text-red-600 hover:underline">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Recent Orders</h2>
            
            <div className="space-y-4">
              {[1, 2, 3].map((order) => (
                <div key={order} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Order #100{order}</h3>
                      <p className="text-gray-600 text-sm mt-1">Placed on October {10 + order}, 2023</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Processing
                    </span>
                  </div>
                  
                  <div className="flex items-center mt-4">
                    <div className="w-16 h-16 bg-gray-200 rounded mr-4"></div>
                    <div className="flex-grow">
                      <h4 className="font-medium">Wireless Headphones</h4>
                      <p className="text-gray-600 text-sm">Qty: 1</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">$99.99</p>
                      <button className="text-primary hover:underline text-sm mt-1">
                        View Details
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <p className="font-medium">Total: $99.99</p>
                    <div className="space-x-2">
                      <button className="bg-gray-200 text-gray-800 px-4 py-1 rounded hover:bg-gray-300">
                        Cancel
                      </button>
                      <button className="bg-primary text-white px-4 py-1 rounded hover:bg-primary-dark">
                        Process
                      </button>
                    </div>
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

export default VendorDashboard;