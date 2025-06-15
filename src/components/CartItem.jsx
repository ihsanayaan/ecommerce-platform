import { useState } from 'react';
import { Trash2 } from 'lucide-react';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity > 0 && newQuantity <= item.stock) {
      setQuantity(newQuantity);
      onQuantityChange(item.id, newQuantity);
    }
  };

  return (
    <div className="border-b last:border-0 p-4">
      <div className="grid grid-cols-12 items-center gap-4">
        {/* Product Image & Name (col-span-5 on md, full width on mobile) */}
        <div className="col-span-12 md:col-span-5 flex items-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-contain mr-4"
          />
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <button
              onClick={() => onRemove(item.id)}
              className="text-red-600 hover:text-red-800 flex items-center text-sm mt-1"
            >
              <Trash2 size={14} className="mr-1" /> Remove
            </button>
          </div>
        </div>
        
        {/* Price (hidden on mobile, col-span-2 on md) */}
        <div className="hidden md:block md:col-span-2 text-center">
          ${item.price.toFixed(2)}
        </div>
        
        {/* Quantity (col-span-12 on mobile, col-span-3 on md) */}
        <div className="col-span-12 md:col-span-3 flex justify-center">
          <div className="flex items-center border rounded">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="px-3 py-1 hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="px-3 py-1 hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>
        
        {/* Total (col-span-12 on mobile, col-span-2 on md) */}
        <div className="col-span-12 md:col-span-2 text-center font-semibold">
          ${(item.price * quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CartItem;