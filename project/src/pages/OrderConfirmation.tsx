import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';
import { Check, Clock, Truck, ChevronRight } from 'lucide-react';

const OrderConfirmation = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { getOrderById } = useOrder();
  const [order, setOrder] = useState(getOrderById(orderId || ''));
  const [estimatedTime, setEstimatedTime] = useState('');
  
  useEffect(() => {
    // Generate a random delivery time between 25-45 minutes
    const minTime = 25;
    const maxTime = 45;
    const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    
    setEstimatedTime(`${randomTime} minutes`);
  }, []);
  
  if (!order) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gray-50 flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Order Not Found</h2>
          <p className="text-gray-600 mb-6">We couldn't find the order you're looking for.</p>
          <Link 
            to="/" 
            className="px-6 py-3 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors inline-flex items-center"
          >
            Go to Homepage
            <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
            <p className="text-gray-600">
              Your order has been received and is being processed.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Order Number:</span>
              <span>{order.orderId}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Date:</span>
              <span>{order.date.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Restaurant:</span>
              <span>{order.restaurant.name}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Status:</span>
              <span className="text-orange-600 font-medium capitalize">{order.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Estimated Delivery:</span>
              <span className="flex items-center">
                <Clock size={16} className="mr-1 text-orange-600" />
                {estimatedTime}
              </span>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden mb-8">
            <div className="bg-gray-50 px-4 py-3 border-b">
              <h2 className="font-semibold">Order Items</h2>
            </div>
            <div className="divide-y">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded overflow-hidden mr-4">
                      <img 
                        src={item.foodItem.image} 
                        alt={item.foodItem.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{item.foodItem.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span>${(item.foodItem.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden mb-8">
            <div className="bg-gray-50 px-4 py-3 border-b">
              <h2 className="font-semibold">Order Total</h2>
            </div>
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${(order.totalAmount * 0.88).toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery Fee</span>
                <span>$2.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax</span>
                <span>${(order.totalAmount * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                <span>Total</span>
                <span>${order.totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8 flex items-start">
            <Truck size={20} className="text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-orange-800 mb-1">Delivery Update</p>
              <p className="text-orange-700 text-sm">
                Your order will be prepared by {order.restaurant.name} and delivered to your address. You'll receive updates about your order status.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="px-6 py-3 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors text-center"
            >
              Back to Homepage
            </Link>
            <Link 
              to="/restaurants" 
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors text-center"
            >
              Browse More Restaurants
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;