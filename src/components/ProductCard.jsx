import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext'; // NEW

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // NEW

  const handleAdd = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${product.id}`}>
        <div className="relative h-48 bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold mb-1 hover:text-primary">{product.name}</h3>
        </Link>

        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < product.rating ? 'currentColor' : 'none'}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${product.price}</span>
          <button 
            className="bg-primary text-white p-2 rounded-full hover:bg-primary-dark disabled:opacity-50"
            disabled={product.stock === 0}
            onClick={handleAdd}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
