// src/components/admin/DashboardHome.jsx
import { useEffect, useState } from 'react';
import { 
  TrendingUp, 
  ShoppingBag, 
  Users as UsersIcon,
  DollarSign
} from 'lucide-react';

const DashboardHome = () => {
  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0
  });

  useEffect(() => {
    // Fetch stats from API
    const fetchStats = async () => {
      try {
        // Replace with actual API call
        const response = await fetch('/api/admin/stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<TrendingUp />}
          title="Total Sales"
          value={stats.totalSales}
          change="+12%"
          trend="up"
        />
        <StatCard 
          icon={<ShoppingBag />}
          title="Total Orders"
          value={stats.totalOrders}
          change="+5%"
          trend="up"
        />
        <StatCard 
          icon={<UsersIcon />}
          title="Total Users"
          value={stats.totalUsers}
          change="+8%"
          trend="up"
        />
        <StatCard 
          icon={<DollarSign />}
          title="Total Revenue"
          value={`$${stats.totalRevenue.toLocaleString()}`}
          change="+15%"
          trend="up"
        />
      </div>
      
      {/* Recent Orders Table */}
      <RecentOrders />
    </div>
  );
};

const StatCard = ({ icon, title, value, change, trend }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <div className="p-3 rounded-full bg-blue-100 text-blue-600">
        {icon}
      </div>
    </div>
    <div className={`mt-2 text-sm ${
      trend === 'up' ? 'text-green-600' : 'text-red-600'
    }`}>
      <span>{change} from last month</span>
    </div>
  </div>
);

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch recent orders
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/admin/orders/recent');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-semibold">Recent Orders</h3>
        <button className="text-sm text-primary hover:underline">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map(order => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">#{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(order.date).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">${order.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === 'completed' ? 'bg-green-100 text-green-800' :
                    order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardHome;