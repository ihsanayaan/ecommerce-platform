// src/components/admin/AdminHeader.jsx
import { Bell, Search } from 'lucide-react';

const AdminHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Search Bar */}
        <div className="relative w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        {/* Admin Controls */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Bell />
          </button>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            <span className="ml-2">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;