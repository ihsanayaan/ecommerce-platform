import { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setFeaturedProducts([
        {
          id: 1,
          name: 'Wireless Headphones',
          price: 99.99,
          rating: 4,
          reviews: 124,
          image: require('../assets/images/headphones.jpg'),
          stock: 10
        },
        {
          id: 2,
          name: 'Smart Watch',
          price: 199.99,
          rating: 5,
          reviews: 89,
          image: require('../assets/images/smartwatch.jpg'),
          stock: 5
        },
        {
          id: 3,
          name: 'Bluetooth Speaker',
          price: 59.99,
          rating: 3,
          reviews: 42,
          image: require('../assets/images/bluetoothspeaker.jpg'),
          stock: 7
        },
        {
          id: 8,
          name: 'Gaming Keyboard',
          price: 79.99,
          rating: 4,
          reviews: 56,
          image: require('../assets/images/gamingkeyboard.jpg'),
          stock: 15
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
      id: 6,
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
      id: 9,
      name: 'Top',
      price: 250.0,
      rating: 5,
      reviews: 200,
      image: require('../assets/images/kichin.jpg'),
      stock: 15,
      category: 'home'
    },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center"> Products</h2>
          
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">ShopEase</h3>
          <p className="text-gray-400">Your one-stop shop for all your needs.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-primary px-4 py-2 rounded-r hover:bg-primary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Home;