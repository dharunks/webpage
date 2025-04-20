import { useState, useEffect } from 'react';
import { restaurants } from '../data/restaurants';
import { Restaurant } from '../types';
import RestaurantCard from '../components/RestaurantCard';
import { Search, Filter } from 'lucide-react';

const RestaurantsPage = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(restaurants);
  const [searchQuery, setSearchQuery] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('All');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  
  // Get unique cuisines for the filter
  const cuisines = ['All', ...new Set(restaurants.map(restaurant => restaurant.cuisine))];
  
  // Filter restaurants based on search, cuisine, and rating
  useEffect(() => {
    let filtered = restaurants;
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply cuisine filter
    if (cuisineFilter !== 'All') {
      filtered = filtered.filter(restaurant => restaurant.cuisine === cuisineFilter);
    }
    
    // Apply rating filter
    if (ratingFilter > 0) {
      filtered = filtered.filter(restaurant => restaurant.rating >= ratingFilter);
    }
    
    setFilteredRestaurants(filtered);
  }, [searchQuery, cuisineFilter, ratingFilter]);
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-8 mb-6">Restaurants</h1>
        
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search restaurants or cuisines..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <button
              className="md:hidden flex items-center justify-center px-4 py-2 bg-gray-100 rounded-md"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} className="mr-2" />
              <span>Filters</span>
            </button>
            
            <div className="hidden md:flex items-center space-x-4">
              <div>
                <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700 mb-1">
                  Cuisine
                </label>
                <select
                  id="cuisine"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={cuisineFilter}
                  onChange={(e) => setCuisineFilter(e.target.value)}
                >
                  {cuisines.map(cuisine => (
                    <option key={cuisine} value={cuisine}>{cuisine}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <select
                  id="rating"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(Number(e.target.value))}
                >
                  <option value={0}>All Ratings</option>
                  <option value={3}>3+ Stars</option>
                  <option value={4}>4+ Stars</option>
                  <option value={4.5}>4.5+ Stars</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden space-y-4 pt-4 border-t border-gray-200">
              <div>
                <label htmlFor="mobile-cuisine" className="block text-sm font-medium text-gray-700 mb-1">
                  Cuisine
                </label>
                <select
                  id="mobile-cuisine"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={cuisineFilter}
                  onChange={(e) => setCuisineFilter(e.target.value)}
                >
                  {cuisines.map(cuisine => (
                    <option key={cuisine} value={cuisine}>{cuisine}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="mobile-rating" className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <select
                  id="mobile-rating"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(Number(e.target.value))}
                >
                  <option value={0}>All Ratings</option>
                  <option value={3}>3+ Stars</option>
                  <option value={4}>4+ Stars</option>
                  <option value={4.5}>4.5+ Stars</option>
                </select>
              </div>
            </div>
          )}
        </div>
        
        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-600">No restaurants found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setCuisineFilter('All');
                  setRatingFilter(0);
                }}
                className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsPage;