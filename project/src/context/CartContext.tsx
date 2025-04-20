import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, FoodItem, Restaurant } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: FoodItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getRestaurant: () => Restaurant | null;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (foodItem: FoodItem) => {
    // Check if we already have items from a different restaurant
    const currentRestaurantId = cartItems.length > 0 ? cartItems[0].foodItem.restaurantId : null;
    
    if (currentRestaurantId !== null && currentRestaurantId !== foodItem.restaurantId) {
      if (!confirm('Adding items from a different restaurant will clear your current cart. Continue?')) {
        return;
      }
      setCartItems([{ foodItem, quantity: 1 }]);
      return;
    }
    
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(item => item.foodItem.id === foodItem.id);
    
    if (existingItemIndex !== -1) {
      // Increase quantity if item already exists
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      // Add new item to cart
      setCartItems([...cartItems, { foodItem, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter(item => item.foodItem.id !== itemId));
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    const updatedItems = cartItems.map(item => 
      item.foodItem.id === itemId ? { ...item, quantity } : item
    );
    
    setCartItems(updatedItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.foodItem.price * item.quantity), 0);
  };

  const getRestaurant = () => {
    if (cartItems.length === 0) return null;
    
    // All items in the cart should be from the same restaurant
    return {
      id: cartItems[0].foodItem.restaurantId,
      name: '', // This would normally be filled from a restaurant lookup
      image: '',
      cuisine: '',
      rating: 0,
      deliveryTime: '',
      deliveryFee: 0,
      description: ''
    };
  };

  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items: cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getRestaurant,
      getItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};