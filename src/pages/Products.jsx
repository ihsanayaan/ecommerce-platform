import { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

// Dummy Footer Component (Replace with real one)
const Footer = () => (
  <footer className="bg-gray-100 text-center py-4 mt-10">© 2025 ShopEase</footer>
);

const Products = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      rating: 4,
      reviews: 124,
      image: require('../assets/images/headphones.jpg'),
      stock: 10,
      category: 'electronics'
    },
     {
       id: '2',
       name: 'SmartFit X Watch',
       price: 89.99,
       rating: 4.2,
       reviews: 154,
       image: require('../assets/images/smartwatch.jpg'),
       stock: 15,
       category: 'electronics'
    },
    {
      id: 7,
      name: 'Girls T-Shirt',
      price: 25.0,
      rating: 5,
      reviews: 200,
      image: require('../assets/images/tshirt.jpg'),
      stock: 15,
      category: 'clothing'
    },
    {
      id: 8,
      name: 'Wooden Sofa Set',
      price: 180.0,
      rating: 4.5,
      reviews: 80,
      image: require('../assets/images/sofa.jpg'),
      stock: 5,
      category: 'home'
    },
    {
      id: 5,
      name: 'Smartphone',
      price: 150.0,
      rating: 4.2,
      reviews: 170,
      image: require('../assets/images/smartphone.jpg'),
      stock: 20,
      category: 'electronics'
    },
     {
      id: 4,
      name: 'Baby T-Shirt',
      price: 25.0,
      rating: 5,
      reviews: 200,
      image: require('../assets/images/tshirt1.jpg'),
      stock: 15,
      category: 'clothing'
    },
     {
      id: 6,
      name: 'Top',
      price: 250.0,
      rating: 5,
      reviews: 200,
      image: require('../assets/images/kichin.jpg'),
      stock: 15,
      category: 'home'
    },
  ]);

  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    sortBy: 'featured'
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const applyFilters = () => {
    let filtered = [...products];

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    // Price Range filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    // Sorting
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredProducts = applyFilters();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-4">Filters</h3>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Categories</h4>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded"
              >
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="home">Home & Kitchen</option>
              </select>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Price Range</h4>
              <select
                name="priceRange"
                value={filters.priceRange}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded"
              >
                <option value="all">All Prices</option>
                <option value="0-50">$0 - $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-200">$100 - $200</option>
              </select>
            </div>

            <button
              className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark"
              onClick={applyFilters}
            >
              Apply Filters
            </button>
          </aside>

          {/* Products Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">All Products</h2>
              <select
                name="sortBy"
                value={filters.sortBy}
                onChange={handleFilterChange}
                className="p-2 border rounded"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p>No products found with selected filters.</p>
              )}
            </div>

            <div className="flex justify-center mt-8">        
         <button
    onClick={() => window.location.href = '/'}
    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
  >
    ← Back to Home
  </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
