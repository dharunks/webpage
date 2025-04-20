import { useState, useEffect } from 'react';
import { foodItems } from '../data/foods';
import { restaurants } from '../data/restaurants';
import { FoodItem } from '../types';
import FoodCard from '../components/FoodCard';
import { Search, Filter, Vegan as Vegetarian, Flame } from 'lucide-react';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFoods, setFilteredFoods] = useState<FoodItem[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filters
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [vegOnly, setVegOnly] = useState(false);
  const [spicyOnly, setSpicyOnly] = useState(false);
  const [popularOnly, setPopularOnly] = useState(false);
  const [selectedRestaurants, setSelectedRestaurants] = useState<number[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // Get unique categories and restaurant names
  const categories = [...new Set(foodItems.map(item => item.category))];
  
  // Filter foods based on search query and filters
  useEffect(() => {
    let filtered = foodItems;
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(food => 
        food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply price range filter
    filtered = filtered.filter(food => 
      food.price >= priceRange[0] && food.price <= priceRange[1]
    );
    
    // Apply vegetarian filter
    if (vegOnly) {
      filtered = filtered.filter(food => food.veg);
    }
    
    // Apply spicy filter
    if (spicyOnly) {
      filtered = filtered.filter(food => food.spicy);
    }
    
    // Apply popular filter
    if (popularOnly) {
      filtered = filtered.filter(food => food.popular);
    }
    
    // Apply restaurant filter
    if (selectedRestaurants.length > 0) {
      filtered = filtered.filter(food => 
        selectedRestaurants.includes(food.restaurantId)
      );
    }
    
    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(food => 
        selectedCategories.includes(food.category)
      );
    }
    
    setFilteredFoods(filtered);
  }, [searchQuery, priceRange, vegOnly, spicyOnly, popularOnly, selectedRestaurants, selectedCategories]);
  
  // Handle restaurant selection
  const handleRestaurantToggle = (restaurantId: number) => {
    setSelectedRestaurants(prev => {
      if (prev.includes(restaurantId)) {
        return prev.filter(id => id !== restaurantId);
      } else {
        return [...prev, restaurantId];
      }
    });
  };
  
  // Handle category selection
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-8 mb-6">Search Foods</h1>
        
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for food..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <button
              className="flex-shrink-0 md:flex-shrink px-6 py-3 bg-gray-100 rounded-md flex items-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} className="mr-2" />
              <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
            </button>
          </div>
          
          {/* Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price Range */}
              <div>
                <h3 className="text-lg font-medium mb-2">Price Range</h3>
                <div className="flex items-center justify-between mb-2">
                  <span>${priceRange[0].toFixed(2)}</span>
                  <span>${priceRange[1].toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full"
                />
              </div>
              
              {/* Other Filters */}
              <div>
                <h3 className="text-lg font-medium mb-2">Dietary Preferences</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={vegOnly}
                      onChange={() => setVegOnly(!vegOnly)}
                      className="rounded text-orange-600 mr-2"
                    />
                    <Vegetarian size={16} className="text-green-600 mr-1" />
                    <span>Vegetarian Only</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={spicyOnly}
                      onChange={() => setSpicyOnly(!spicyOnly)}
                      className="rounded text-orange-600 mr-2"
                    />
                    <Flame size={16} className="text-red-600 mr-1" />
                    <span>Spicy Only</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={popularOnly}
                      onChange={() => setPopularOnly(!popularOnly)}
                      className="rounded text-orange-600 mr-2"
                    />
                    <span>Popular Items Only</span>
                  </label>
                </div>
              </div>
              
              {/* Restaurant Filter */}
              <div>
                <h3 className="text-lg font-medium mb-2">Restaurants</h3>
                <div className="space-y-1 max-h-60 overflow-y-auto pr-2">
                  {restaurants.map(restaurant => (
                    <label key={restaurant.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedRestaurants.includes(restaurant.id)}
                        onChange={() => handleRestaurantToggle(restaurant.id)}
                        className="rounded text-orange-600 mr-2"
                      />
                      <span>{restaurant.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Category Filter */}
              <div>
                <h3 className="text-lg font-medium mb-2">Categories</h3>
                <div className="space-y-1 max-h-60 overflow-y-auto pr-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="rounded text-orange-600 mr-2"
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Reset Filters Button */}
              <div className="md:col-span-2 flex justify-end">
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setPriceRange([0, 50]);
                    setVegOnly(false);
                    setSpicyOnly(false);
                    setPopularOnly(false);
                    setSelectedRestaurants([]);
                    setSelectedCategories([]);
                  }}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Results */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'All Foods'}
            </h2>
            <p className="text-gray-600">{filteredFoods.length} items found</p>
          </div>
          
          {filteredFoods.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-lg text-gray-600 mb-4">No food items found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setPriceRange([0, 50]);
                  setVegOnly(false);
                  setSpicyOnly(false);
                  setPopularOnly(false);
                  setSelectedRestaurants([]);
                  setSelectedCategories([]);
                }}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredFoods.map(food => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;