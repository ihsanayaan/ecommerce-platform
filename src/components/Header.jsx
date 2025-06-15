import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useSelector } from 'react-redux';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Safely access Redux state with fallbacks
  const cartItems = useSelector((state) => state.cart?.items || []);
  const user = useSelector((state) => state.auth?.user || null);
  
  // Calculate cart item count
  const cartItemCount = cartItems.reduce(
    (total, item) => total + (item?.quantity || 0),
    0
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between">
         <Link 
  to="/" 
  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-sm"
>
  ShopEase
</Link>
          
          <form onSubmit={handleSearch} className="relative w-1/3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button 
              type="submit"
              className="absolute right-3 top-2.5 text-gray-400 hover:text-primary"
            >
              <Search />
            </button>
          </form>
          
          <nav className="flex items-center space-x-6">
            <Link 
              to="/products" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-gray-700 hover:text-primary transition-colors" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link 
              to={user ? "/profile" : "/auth"} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              <User />
            </Link>
          </nav>
        </div>

        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             className="text-gray-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <Link to="/" className="text-2xl font-bold text-primary">
            ShopEase
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
             <ShoppingCart className="text-gray-100" />

              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link 
              to={user ? "/profile" : "/auth"} 
              className="text-gray-100"
            >
              <User />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
       {mobileMenuOpen && (
  <div className="md:hidden bg-white py-4 border-t mt-3 rounded-lg shadow">
    <form onSubmit={handleSearch} className="relative mb-4 px-2">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-350"
              />
              <button 
                type="submit"
                className="absolute right-3 top-2.5 text-gray-350"
              >
                <Search />
              </button>
            </form>
            
            <nav className="flex flex-col space-y-3 px-2">
              <Link 
                to="/products" 
                className="text-gray-700 py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to={user ? "/profile" : "/auth"} 
                className="text-gray-700 py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {user ? "My Profile" : "Login/Signup"}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;