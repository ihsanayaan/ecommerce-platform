import { Link } from 'react-router-dom';
import SmokeBg from '../assets/images/smoke-background.png';

const HeroSection = () => {
  return (
    <section className="relative text-white">
      {/* Local Image Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${SmokeBg})`,
        }}
      ></div>

      {/* Smokey Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-sm z-0"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ShopEase</h1>
          <p className="text-xl mb-8">Discover amazing products at unbeatable prices</p>
          <div className="flex space-x-4">
            <Link to="/products" className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
