import { createContext, useContext, useState, ReactNode } from 'react';
import { Order, CartItem, Restaurant } from '../types';

interface OrderContextType {
  orders: Order[];
  placeOrder: (items: CartItem[], restaurant: Restaurant, totalAmount: number) => string;
  getOrderById: (orderId: string) => Order | undefined;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const generateOrderId = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const placeOrder = (items: CartItem[], restaurant: Restaurant, totalAmount: number) => {
    const orderId = generateOrderId();
    
    const newOrder: Order = {
      orderId,
      items,
      restaurant,
      totalAmount,
      date: new Date(),
      status: 'placed'
    };
    
    setOrders(prev => [...prev, newOrder]);
    return orderId;
  };

  const getOrderById = (orderId: string) => {
    return orders.find(order => order.orderId === orderId);
  };

  return (
    <OrderContext.Provider value={{
      orders,
      placeOrder,
      getOrderById
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};