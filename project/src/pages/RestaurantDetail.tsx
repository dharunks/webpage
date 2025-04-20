import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import { foodItems } from '../data/foods';
import { Restaurant, FoodItem } from '../types';
import FoodCard from '../components/FoodCard';
import { Star, Clock, DollarSign, Search } from 'lucide-react';

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get restaurant and its foods
  useEffect(() => {
    if (id) {
      const restaurantId = parseInt(id);
      const foundRestaurant = restaurants.find(r => r.id === restaurantId);
      const restaurantFoods = foodItems.filter(food => food.restaurantId === restaurantId);
      
      setRestaurant(foundRestaurant || null);
      setFoods(restaurantFoods);
      
      // Set initial active category
      if (restaurantFoods.length > 0) {
        const categories = [...new Set(restaurantFoods.map(food => food.category))];
        setActiveCategory(categories[0]);
      }
    }
  }, [id]);
  
  // Get unique categories for this restaurant
  const categories = [...new Set(foods.map(food => food.category))];
  
  // Filter foods by category and search
  const filteredFoods = foods.filter(food => {
    const matchesCategory = !activeCategory || food.category === activeCategory;
    const matchesSearch = !searchQuery || 
      food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  if (!restaurant) {
    return <div className="min-h-screen flex items-center justify-center">Loading restaurant...</div>;
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Restaurant Hero Header */}
      <div className="h-64 bg-center bg-cover relative" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${restaurant.image})` 
      }}>
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
          <h1 className="text-3xl font-bold text-white mb-2">{restaurant.name}</h1>
          <div className="flex flex-wrap text-white gap-4">
            <div className="flex items-center">
              <Star size={16} className="text-yellow-400 mr-1" />
              <span>{restaurant.rating}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center">
              <DollarSign size={16} className="mr-1" />
              <span>
                {restaurant.deliveryFee === 0 
                  ? "Free Delivery" 
                  : `$${restaurant.deliveryFee.toFixed(2)} Delivery Fee`}
              </span>
            </div>
            <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-sm">
              {restaurant.cuisine}
            </span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Restaurant Description */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-2">About {restaurant.name}</h2>
          <p className="text-gray-700">{restaurant.description}</p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search menu items..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Category Navigation */}
        <div className="mb-8 overflow-x-auto hide-scrollbar">
          <div className="flex space-x-2 pb-2">
            {categories.map(category => (
              <button
                key={category}
                className={`whitespace-nowrap px-4 py-2 rounded-full ${
                  activeCategory === category 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                } transition-colors`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Menu Items */}
        {searchQuery ? (
          <div>
            <h2 className="text-2xl font-bold mb-6">Search Results</h2>
            {filteredFoods.length === 0 ? (
              <p className="text-gray-600 text-center py-12">No items found matching "{searchQuery}"</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFoods.map(food => (
                  <FoodCard key={food.id} food={food} />
                ))}
              </div>
            )}
          </div>
        ) : (
          categories.map(category => {
            const categoryFoods = foods.filter(food => food.category === category);
            
            // Skip empty categories or non-active categories (when one is selected)
            if (categoryFoods.length === 0 || (activeCategory && category !== activeCategory)) {
              return null;
            }
            
            return (
              <div key={category} className="mb-12" id={category}>
                <h2 className="text-2xl font-bold mb-6">{category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryFoods.map(food => (
                    <FoodCard key={food.id} food={food} />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;