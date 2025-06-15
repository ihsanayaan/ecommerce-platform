import { LayoutDashboard, ShoppingBag, Settings } from 'lucide-react';

const VendorSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', value: 'dashboard' },
    { icon: ShoppingBag, label: 'Products', value: 'products' },
    { icon: Settings, label: 'Settings', value: 'settings' },
  ];

  return (
    <aside className="w-64 bg-white shadow h-screen p-4">
      <h2 className="text-xl font-semibold mb-6">Vendor Panel</h2>
      <ul className="space-y-2">
        {menuItems.map(({ icon: Icon, label, value }) => (
          <li key={value}>
            <button
              onClick={() => setActiveTab(value)}
              className={`flex items-center gap-2 w-full p-2 text-left rounded ${
                activeTab === value ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default VendorSidebar;
