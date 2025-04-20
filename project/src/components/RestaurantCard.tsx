import { Link } from 'react-router-dom';
import { Star, Clock, DollarSign } from 'lucide-react';
import { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const { id, name, image, cuisine, rating, deliveryTime, deliveryFee } = restaurant;
  
  return (
    <Link 
      to={`/restaurants/${id}`}
      className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
          <Star size={14} className="text-yellow-500 mr-1" />
          <span>{rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{cuisine}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-700">
            <Clock size={14} className="mr-1" />
            <span>{deliveryTime}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <DollarSign size={14} className="mr-1" />
            <span className={deliveryFee === 0 ? "text-green-600 font-medium" : ""}>
              {deliveryFee === 0 ? "Free Delivery" : `$${deliveryFee.toFixed(2)}`}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;