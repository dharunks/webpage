import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ChevronRight, MapPin, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';
import { restaurants } from '../data/restaurants';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const { placeOrder } = useOrder();
  const navigate = useNavigate();
  
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const cartTotal = getCartTotal();
  const deliveryFee = items.length > 0 ? 2.99 : 0;
  const tax = cartTotal * 0.08;
  const total = cartTotal + deliveryFee + tax;
  
  // Get the restaurant for the items in the cart
  const getRestaurant = () => {
    if (items.length === 0) return null;
    const restaurantId = items[0].foodItem.restaurantId;
    return restaurants.find(r => r.id === restaurantId) || null;
  };
  
  const restaurant = getRestaurant();
  
  const handleSubmitOrder = () => {
    if (!address) {
      alert('Please enter your delivery address');
      return;
    }
    
    if (!restaurant) {
      alert('Something went wrong. Please try again.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      const orderId = placeOrder(items, restaurant, total);
      clearCart();
      setIsSubmitting(false);
      navigate(`/order-confirmation/${orderId}`);
    }, 1500);
  };
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some delicious food to your cart and come back!</p>
            <Link 
              to="/restaurants" 
              className="px-6 py-3 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors inline-flex items-center"
            >
              Browse Restaurants
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Items from {restaurant?.name}</h2>
                <button 
                  onClick={clearCart}
                  className="text-red-600 text-sm hover:text-red-800 transition-colors"
                >
                  Clear cart
                </button>
              </div>
              
              <div className="divide-y">
                {items.map(item => (
                  <CartItem key={item.foodItem.id} item={item} />
                ))}
              </div>
            </div>
            
            {/* Delivery Address */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin size={20} className="mr-2 text-orange-600" />
                Delivery Address
              </h2>
              
              <textarea
                placeholder="Enter your delivery address"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></textarea>
            </div>
            
            {/* Payment Method */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <CreditCard size={20} className="mr-2 text-orange-600" />
                Payment Method
              </h2>
              
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="Credit Card"
                    checked={paymentMethod === 'Credit Card'}
                    onChange={() => setPaymentMethod('Credit Card')}
                    className="mr-2"
                  />
                  <span>Credit Card</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={paymentMethod === 'Cash on Delivery'}
                    onChange={() => setPaymentMethod('Cash on Delivery')}
                    className="mr-2"
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white shadow-md rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-3 flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <button
                onClick={handleSubmitOrder}
                disabled={isSubmitting}
                className={`w-full py-3 rounded-md font-medium text-white text-center ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-orange-600 hover:bg-orange-700'
                } transition-colors flex items-center justify-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Place Order'
                )}
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By placing your order, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;