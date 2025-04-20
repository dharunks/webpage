import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import { foodItems } from '../data/foods';
import RestaurantCard from '../components/RestaurantCard';
import FoodCard from '../components/FoodCard';

const HomePage = () => {
  const [popularRestaurants, setPopularRestaurants] = useState(restaurants);
  const [popularFoods, setPopularFoods] = useState(foodItems.filter(food => food.popular));
  
  // Filter restaurants by highest rating
  useEffect(() => {
    const sortedRestaurants = [...restaurants].sort((a, b) => b.rating - a.rating);
    setPopularRestaurants(sortedRestaurants.slice(0, 6));
  }, []);
  
  // Shuffle popular foods for variety
  useEffect(() => {
    const shuffled = [...popularFoods].sort(() => 0.5 - Math.random());
    setPopularFoods(shuffled.slice(0, 8));
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/6287295/pexels-photo-6287295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` 
      }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl">
            Delicious Food Delivered to Your Doorstep
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Order from 50+ cuisines and 10+ restaurants with our easy-to-use food delivery app
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/restaurants" 
              className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full text-lg transition-colors duration-300"
            >
              Browse Restaurants
            </Link>
            <Link
              to="/search"
              className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-full text-lg transition-colors duration-300"
            >
              Search Foods
            </Link>
          </div>
        </div>
      </section>
      
      {/* Popular Restaurants Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Popular Restaurants</h2>
            <Link to="/restaurants" className="text-orange-600 hover:text-orange-700 font-medium">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-20 w-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Choose a Restaurant</h3>
              <p className="text-gray-600">Browse through our extensive list of restaurants and cuisines.</p>
            </div>
            
            <div className="text-center">
              <div className="h-20 w-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Select Your Food</h3>
              <p className="text-gray-600">Choose from a wide variety of delicious meals and add them to your cart.</p>
            </div>
            
            <div className="text-center">
              <div className="h-20 w-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Enjoy Your Meal</h3>
              <p className="text-gray-600">Place your order and enjoy quick delivery right to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Foods Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Popular Foods</h2>
            <Link to="/search" className="text-orange-600 hover:text-orange-700 font-medium">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularFoods.map(food => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Order Delicious Food?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start ordering your favorite meals from top restaurants in your area today!
          </p>
          <Link
            to="/restaurants"
            className="px-8 py-3 bg-white text-orange-600 hover:bg-gray-100 font-medium rounded-full text-lg inline-block transition-colors duration-300"
          >
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;