export interface Restaurant {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  description: string;
}

export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  restaurantId: number;
  category: string;
  veg: boolean;
  spicy: boolean;
  popular: boolean;
}

export interface CartItem {
  foodItem: FoodItem;
  quantity: number;
}

export interface Order {
  orderId: string;
  items: CartItem[];
  restaurant: Restaurant;
  totalAmount: number;
  date: Date;
  status: 'placed' | 'confirmed' | 'preparing' | 'on the way' | 'delivered';
}