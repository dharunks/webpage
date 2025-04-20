import { Vegan as Vegetarian, Flame } from 'lucide-react';
import { FoodItem } from '../types';
import { useCart } from '../context/CartContext';

interface FoodCardProps {
  food: FoodItem;
}

const FoodCard = ({ food }: FoodCardProps) => {
  const { addToCart } = useCart();
  const { name, description, price, image, veg, spicy, popular } = food;
  
  const handleAddToCart = () => {
    addToCart(food);
  };
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        
        {/* Labels */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {veg && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
              <Vegetarian size={12} className="mr-1" />
              <span>Veg</span>
            </span>
          )}
          
          {spicy && (
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full flex items-center">
              <Flame size={12} className="mr-1" />
              <span>Spicy</span>
            </span>
          )}
          
          {popular && (
            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
              Popular
            </span>
          )}
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-3 flex-grow">{description}</p>
        
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-gray-900">${price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className="px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm font-medium transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;