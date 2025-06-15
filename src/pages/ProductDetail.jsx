import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import RatingStars from '../components/RatingStars';

// Headphones
import front from '../assets/products/headphones-front.jpg';
import side from '../assets/products/headphones-side.jpg';
import back from '../assets/products/headphones-back.jpg';
import caseImg from '../assets/products/headphones-case.jpg';

// Smartwatch
import Front from '../assets/products/smartwatch-front.jpg';
import Side from '../assets/products/smartwatch-side.jpg';
import Back from '../assets/products/smartwatch-back.jpg';
import Case from '../assets/products/smartwatch-case.jpg';

// Speaker
import SpeakerFront from '../assets/products/speaker-front.jpg';
import SpeakerSide from '../assets/products/speaker-side.jpg';
import SpeakerBack from '../assets/products/speaker-back.jpg';
import SpeakerCase from '../assets/products/speaker-case.jpg';
// Baby T-Shirt Images
import TshirtFront from '../assets/products/tshirt-front.jpg';
import TshirtSide from '../assets/products/tshirt-side.jpg';
import TshirtBack from '../assets/products/tshirt-back.jpg';
import TshirtFolded from '../assets/products/tshirt-folded.jpg';

// Smartphone Images
import PhoneFront from '../assets/products/phone-front.jpg';
import PhoneSide from '../assets/products/phone-side.jpg';
import PhoneBack from '../assets/products/phone-back.jpg';
import PhoneBox from '../assets/products/phone-box.jpg';

// Products Array
const products = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 149.99,
    rating: 4.5,
    reviews: 248,
    description:
      'Experience crystal-clear sound with our premium wireless headphones. Featuring noise cancellation, 30-hour battery life, and comfortable over-ear design.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0',
      'Built-in microphone',
      'Foldable design',
    ],
    images: [front, side, back, caseImg],
    stock: 15,
    category: 'electronics',
    brand: 'AudioMaster',
  },
  {
    id: '2',
    name: 'SmartFit X Watch',
    price: 89.99,
    rating: 4.2,
    reviews: 154,
    description:
      'Track your fitness, heart rate, and notifications with the sleek SmartFit X Watch. Up to 10-day battery life, waterproof, and iOS/Android compatible.',
    features: [
      'Heart Rate Monitor',
      'Sleep Tracking',
      '10-Day Battery',
      'Waterproof IP68',
      'iOS & Android Compatible',
    ],
    images: [Front, Side, Back, Case],
    stock: 23,
    category: 'wearables',
    brand: 'SmartFit',
  },
  {
    id: '3',
    name: 'BoomBass Bluetooth Speaker',
    price: 59.99,
    rating: 4.4,
    reviews: 310,
    description:
      'Enjoy immersive sound with BoomBass Bluetooth Speaker. Compact, waterproof, and powerful bass makes it perfect for outdoor adventures and indoor parties.',
    features: [
      'Powerful Bass Output',
      '12-Hour Battery Life',
      'Bluetooth 5.3',
      'Waterproof IPX7',
      'Built-in Mic for Calls',
    ],
    images: [SpeakerFront, SpeakerSide, SpeakerBack, SpeakerCase],
    stock: 30,
    category: 'audio',
    brand: 'BoomBass',
  },
  {
  id: '4',
  name: 'Cute Baby T-Shirt',
  price: 19.99,
  rating: 4.6,
  reviews: 120,
  description:
    'Soft, breathable cotton baby t-shirt with adorable prints. Gentle on skin, easy to wash, and perfect for all-day comfort.',
  features: [
    '100% Organic Cotton',
    'Machine Washable',
    'Breathable Fabric',
    'Adorable Print',
    'Comfort Fit'
  ],
  images: [TshirtFront, TshirtSide, TshirtBack, TshirtFolded],
  stock: 40,
  category: 'clothing',
  brand: 'TinyWear'
},
{
  id: '5',
  name: 'Xenon X5 Smartphone',
  price: 699.00,
  rating: 4.7,
  reviews: 875,
  description:
    'Experience performance with Xenon X5 – 6.7" AMOLED display, triple camera, 5000mAh battery, and blazing-fast processor.',
  features: [
    '6.7" AMOLED Display',
    'Triple 64MP Camera',
    '5000mAh Battery',
    '8GB RAM / 128GB Storage',
    '5G Connectivity'
  ],
  images: [PhoneFront, PhoneSide, PhoneBack, PhoneBox],
  stock: 12,
  category: 'electronics',
  brand: 'XenonTech'
},

];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

if (!product) {
  return (
    <div className="text-center p-10">
      <h2 className="text-2xl font-bold mb-4">Product not found.</h2>
      <Link
        to="/products"
        className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark"
      >
        ⬅ Back to Products
      </Link>
    </div>
  );
}

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity > 0 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Images */}
          <div>
            <div className="relative">
  <button
    onClick={() => window.history.back()}
    className="absolute top-0 left-0 bg-blue-500 hover:bg-blue-300 text-gray-800 text-xs px-1 py-2 rounded z-10"
  >
    ← Back
  </button>
  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
    <img
      src={product.images[selectedImage]}
      alt={product.name}
      className="w-full h-96 object-contain"
    />
  </div>
</div>

            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border rounded overflow-hidden ${
                    selectedImage === index ? 'border-primary ring-2 ring-primary' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-20 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <RatingStars rating={product.rating} />
              <span className="text-gray-600 ml-2">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="text-2xl font-bold text-primary mb-4">${product.price}</div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Availability</h3>
              <p className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
              </p>
            </div>

            {product.stock > 0 && (
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border rounded">
                </div>
              </div>
            )}

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Product Details</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div>
                  <span className="font-medium">Brand:</span> {product.brand}
                </div>
                <div>
                  <span className="font-medium">Category:</span> {product.category}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="text-4xl font-bold mr-4">{product.rating}</div>
              <div>
                <RatingStars rating={product.rating} size={24} />
                <p className="text-gray-600 mt-1">{product.reviews} reviews</p>
              </div>
            </div>

            {/* Review Form */}
            <div className="border-t pt-6 mb-8">
              <h3 className="font-semibold mb-4">Write a Review</h3>
              <form>
                <div className="mb-4">
                  <label className="block font-medium mb-2">Rating</label>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button" className="text-2xl focus:outline-none">
                        {star <= 4 ? '★' : '☆'}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium mb-2">Review Title</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Summarize your experience"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium mb-2">Your Review</label>
                  <textarea
                    className="w-full p-2 border rounded"
                    rows="4"
                    placeholder="Share your thoughts about this product"
                  ></textarea>
                </div>
                <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark">
                  Submit Review
                </button>
              </form>
            </div>

            {/* Static Reviews */}
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border-b pb-6 last:border-0">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">Great product!</h4>
                    <RatingStars rating={4} size={16} />
                  </div>
                  <p className="text-gray-600 text-sm mb-2">By John D. on June 10, 2025</p>
                  <p className="text-gray-700">
                    These headphones are amazing! The sound quality is exceptional and the noise cancellation works perfectly.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-100 py-6 text-center text-gray-600 mt-8">
    &copy; {new Date().getFullYear()} YourStore. All rights reserved.
  </footer>
);

export default ProductDetail;
