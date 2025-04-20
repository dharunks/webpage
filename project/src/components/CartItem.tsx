import { Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { foodItem, quantity } = item;
  const { updateQuantity, removeFromCart } = useCart();
  
  return (
    <div className="flex items-center py-4 border-b">
      <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0">
        <img
          src={foodItem.image}
          alt={foodItem.name}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h4 className="font-medium">{foodItem.name}</h4>
        <p className="text-sm text-gray-600 mt-1">${foodItem.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(foodItem.id, quantity - 1)}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <Minus size={14} />
        </button>
        
        <span className="mx-3 min-w-8 text-center">{quantity}</span>
        
        <button
          onClick={() => updateQuantity(foodItem.id, quantity + 1)}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <Plus size={14} />
        </button>
        
        <button
          onClick={() => removeFromCart(foodItem.id)}
          className="ml-4 text-red-500 hover:text-red-700 transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;