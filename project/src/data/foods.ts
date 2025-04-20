import { FoodItem } from '../types';

export const foodItems: FoodItem[] = [
  // Italiano's Pasta Haven (id: 1)
  {
    id: 1,
    name: "Classic Spaghetti Carbonara",
    description: "Creamy pasta with pancetta, egg, parmesan, and black pepper",
    price: 14.99,
    image: "https://images.pexels.com/photos/5175537/pexels-photo-5175537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 1,
    category: "Pasta",
    veg: false,
    spicy: false,
    popular: true
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomatoes, and basil on a thin crust",
    price: 12.99,
    image: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 1,
    category: "Pizza",
    veg: true,
    spicy: false,
    popular: true
  },
  {
    id: 3,
    name: "Lasagna Bolognese",
    description: "Layers of pasta, meat sauce, and cheese baked to perfection",
    price: 16.99,
    image: "https://images.pexels.com/photos/6605198/pexels-photo-6605198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 1,
    category: "Pasta",
    veg: false,
    spicy: false,
    popular: false
  },
  {
    id: 4,
    name: "Caprese Salad",
    description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
    price: 9.99,
    image: "https://images.pexels.com/photos/5506069/pexels-photo-5506069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 1,
    category: "Salad",
    veg: true,
    spicy: false,
    popular: false
  },
  {
    id: 5,
    name: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone",
    price: 7.99,
    image: "https://images.pexels.com/photos/6901665/pexels-photo-6901665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 1,
    category: "Dessert",
    veg: true,
    spicy: false,
    popular: true
  },
  
  // Sushi Sensation (id: 2)
  {
    id: 6,
    name: "California Roll",
    description: "Crab, avocado, and cucumber wrapped in seaweed and rice",
    price: 11.99,
    image: "https://images.pexels.com/photos/6449882/pexels-photo-6449882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 2,
    category: "Sushi",
    veg: false,
    spicy: false,
    popular: true
  },
  {
    id: 7,
    name: "Spicy Tuna Roll",
    description: "Fresh tuna with spicy mayo and cucumber",
    price: 13.99,
    image: "https://images.pexels.com/photos/1199973/pexels-photo-1199973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 2,
    category: "Sushi",
    veg: false,
    spicy: true,
    popular: true
  },
  {
    id: 8,
    name: "Miso Soup",
    description: "Traditional Japanese soup with tofu and seaweed",
    price: 4.99,
    image: "https://images.pexels.com/photos/5950433/pexels-photo-5950433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 2,
    category: "Soup",
    veg: true,
    spicy: false,
    popular: false
  },
  {
    id: 9,
    name: "Chicken Teriyaki",
    description: "Grilled chicken glazed with sweet teriyaki sauce, served with rice",
    price: 15.99,
    image: "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 2,
    category: "Main",
    veg: false,
    spicy: false,
    popular: false
  },
  {
    id: 10,
    name: "Salmon Sashimi",
    description: "Fresh, thinly sliced raw salmon",
    price: 16.99,
    image: "https://images.pexels.com/photos/11957025/pexels-photo-11957025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 2,
    category: "Sashimi",
    veg: false,
    spicy: false,
    popular: true
  },
  
  // Taco Fiesta (id: 3)
  {
    id: 11,
    name: "Carne Asada Tacos",
    description: "Grilled steak tacos with onions, cilantro, and salsa",
    price: 12.99,
    image: "https://images.pexels.com/photos/4955174/pexels-photo-4955174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 3,
    category: "Tacos",
    veg: false,
    spicy: true,
    popular: true
  },
  {
    id: 12,
    name: "Chicken Quesadilla",
    description: "Grilled tortilla filled with chicken, cheese, and peppers",
    price: 11.99,
    image: "https://images.pexels.com/photos/10305696/pexels-photo-10305696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 3,
    category: "Quesadillas",
    veg: false,
    spicy: false,
    popular: false
  },
  {
    id: 13,
    name: "Guacamole & Chips",
    description: "Fresh avocado dip with homemade tortilla chips",
    price: 8.99,
    image: "https://images.pexels.com/photos/5737252/pexels-photo-5737252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 3,
    category: "Appetizer",
    veg: true,
    spicy: false,
    popular: false
  },
  {
    id: 14,
    name: "Beef Burrito",
    description: "Large flour tortilla filled with seasoned beef, rice, beans, and cheese",
    price: 13.99,
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 3,
    category: "Burritos",
    veg: false,
    spicy: true,
    popular: true
  },
  {
    id: 15,
    name: "Churros",
    description: "Fried dough pastry dusted with cinnamon sugar, served with chocolate dip",
    price: 6.99,
    image: "https://images.pexels.com/photos/8872534/pexels-photo-8872534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 3,
    category: "Dessert",
    veg: true,
    spicy: false,
    popular: false
  },
  
  // Burger Bonanza (id: 4)
  {
    id: 16,
    name: "Classic Cheeseburger",
    description: "Angus beef patty with cheddar, lettuce, tomato, and special sauce",
    price: 13.99,
    image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 4,
    category: "Burgers",
    veg: false,
    spicy: false,
    popular: true
  },
  {
    id: 17,
    name: "Bacon BBQ Burger",
    description: "Beef patty topped with bacon, cheddar, and BBQ sauce",
    price: 15.99,
    image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 4,
    category: "Burgers",
    veg: false,
    spicy: false,
    popular: true
  },
  {
    id: 18,
    name: "Truffle Fries",
    description: "Crispy fries tossed with truffle oil and parmesan",
    price: 7.99,
    image: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 4,
    category: "Sides",
    veg: true,
    spicy: false,
    popular: false
  },
  {
    id: 19,
    name: "Veggie Burger",
    description: "Plant-based patty with lettuce, tomato, and vegan mayo",
    price: 14.99,
    image: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 4,
    category: "Burgers",
    veg: true,
    spicy: false,
    popular: false
  },
  {
    id: 20,
    name: "Chocolate Milkshake",
    description: "Rich and creamy chocolate milkshake topped with whipped cream",
    price: 6.99,
    image: "https://images.pexels.com/photos/3926544/pexels-photo-3926544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 4,
    category: "Drinks",
    veg: true,
    spicy: false,
    popular: true
  },
  
  // Curry House (id: 5)
  {
    id: 21,
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato sauce",
    price: 16.99,
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 5,
    category: "Curry",
    veg: false,
    spicy: false,
    popular: true
  },
  {
    id: 22,
    name: "Vegetable Biryani",
    description: "Fragrant rice dish with mixed vegetables and aromatic spices",
    price: 14.99,
    image: "https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 5,
    category: "Rice",
    veg: true,
    spicy: true,
    popular: false
  },
  {
    id: 23,
    name: "Garlic Naan",
    description: "Soft flatbread topped with garlic and butter",
    price: 3.99,
    image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 5,
    category: "Bread",
    veg: true,
    spicy: false,
    popular: false
  },
  {
    id: 24,
    name: "Samosas",
    description: "Crispy pastries filled with spiced potatoes and peas",
    price: 5.99,
    image: "https://images.pexels.com/photos/5490403/pexels-photo-5490403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 5,
    category: "Appetizer",
    veg: true,
    spicy: true,
    popular: true
  },
  {
    id: 25,
    name: "Lamb Vindaloo",
    description: "Spicy curry with tender lamb and potatoes",
    price: 17.99,
    image: "https://images.pexels.com/photos/7353370/pexels-photo-7353370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 5,
    category: "Curry",
    veg: false,
    spicy: true,
    popular: false
  },
  
  // Noodle Palace (id: 6)
  {
    id: 26,
    name: "Beef Chow Mein",
    description: "Stir-fried noodles with beef and vegetables",
    price: 13.99,
    image: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 6,
    category: "Noodles",
    veg: false,
    spicy: false,
    popular: true
  },
  {
    id: 27,
    name: "Kung Pao Chicken",
    description: "Spicy stir-fried chicken with peanuts and vegetables",
    price: 15.99,
    image: "https://images.pexels.com/photos/5836771/pexels-photo-5836771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 6,
    category: "Main",
    veg: false,
    spicy: true,
    popular: true
  },
  {
    id: 28,
    name: "Vegetable Spring Rolls",
    description: "Crispy rolls filled with mixed vegetables",
    price: 6.99,
    image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 6,
    category: "Appetizer",
    veg: true,
    spicy: false,
    popular: false
  },
  {
    id: 29,
    name: "Wonton Soup",
    description: "Clear broth with pork-filled dumplings and green onions",
    price: 8.99,
    image: "https://images.pexels.com/photos/4969892/pexels-photo-4969892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 6,
    category: "Soup",
    veg: false,
    spicy: false,
    popular: false
  },
  {
    id: 30,
    name: "Sweet and Sour Pork",
    description: "Crispy pork with bell peppers in sweet and sour sauce",
    price: 14.99,
    image: "https://images.pexels.com/photos/5718017/pexels-photo-5718017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 6,
    category: "Main",
    veg: false,
    spicy: false,
    popular: false
  },
  
  // Mediterranean Delights (id: 7)
  {
    id: 31,
    name: "Greek Salad",
    description: "Fresh vegetables, feta cheese, olives, and olive oil dressing",
    price: 10.99,
    image: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 7,
    category: "Salad",
    veg: true,
    spicy: false,
    popular: true
  },
  {
    id: 32,
    name: "Falafel Platter",
    description: "Crispy chickpea patties with hummus, tahini, and pita bread",
    price: 13.99,
    image: "https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 7,
    category: "Main",
    veg: true,
    spicy: false,
    popular: true
  },
  {
    id: 33,
    name: "Chicken Shawarma",
    description: "Marinated chicken with garlic sauce in a warm pita wrap",
    price: 14.99,
    image: "https://images.pexels.com/photos/7470633/pexels-photo-7470633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 7,
    category: "Wrap",
    veg: false,
    spicy: false,
    popular: true
  },
  {
    id: 34,
    name: "Spanakopita",
    description: "Flaky pastry filled with spinach and feta cheese",
    price: 9.99,
    image: "https://images.pexels.com/photos/6419736/pexels-photo-6419736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 7,
    category: "Appetizer",
    veg: true,
    spicy: false,
    popular: false
  },
  {
    id: 35,
    name: "Baklava",
    description: "Layered phyllo pastry with nuts and honey syrup",
    price: 7.99,
    image: "https://images.pexels.com/photos/13690183/pexels-photo-13690183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 7,
    category: "Dessert",
    veg: true,
    spicy: false,
    popular: false
  },
  
  // Veggie Paradise (id: 8)
  {
    id: 36,
    name: "Buddha Bowl",
    description: "Grain bowl with roasted vegetables, avocado, and tahini dressing",
    price: 13.99,
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 8,
    category: "Bowl",
    veg: true,
    spicy: false,
    popular: true
  },
  {
    id: 37,
    name: "Jackfruit Tacos",
    description: "Plant-based tacos with seasoned jackfruit and avocado crema",
    price: 12.99,
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 8,
    category: "Tacos",
    veg: true,
    spicy: true,
    popular: false
  },
  {
    id: 38,
    name: "Mushroom Risotto",
    description: "Creamy Italian rice with wild mushrooms and parmesan",
    price: 14.99,
    image: "https://images.pexels.com/photos/5639352/pexels-photo-5639352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 8,
    category: "Main",
    veg: true,
    spicy: false,
    popular: true
  },
  {
    id: 39,
    name: "Cauliflower Wings",
    description: "Crispy cauliflower bites with buffalo sauce",
    price: 10.99,
    image: "https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 8,
    category: "Appetizer",
    veg: true,
    spicy: true,
    popular: false
  },
  {
    id: 40,
    name: "Vegan Chocolate Cake",
    description: "Rich chocolate cake made without dairy or eggs",
    price: 8.99,
    image: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 8,
    category: "Dessert",
    veg: true,
    spicy: false,
    popular: false
  },
  
  // Bangkok Street Food (id: 9)
  {
    id: 41,
    name: "Pad Thai",
    description: "Stir-fried rice noodles with eggs, tofu, bean sprouts, and peanuts",
    price: 14.99,
    image: "https://images.pexels.com/photos/1001773/pexels-photo-1001773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 9,
    category: "Noodles",
    veg: false,
    spicy: true,
    popular: true
  },
  {
    id: 42,
    name: "Green Curry",
    description: "Spicy coconut curry with bamboo shoots and thai basil",
    price: 15.99,
    image: "https://images.pexels.com/photos/12697249/pexels-photo-12697249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 9,
    category: "Curry",
    veg: false,
    spicy: true,
    popular: true
  },
  {
    id: 43,
    name: "Mango Sticky Rice",
    description: "Sweet glutinous rice with fresh mango and coconut milk",
    price: 8.99,
    image: "https://images.pexels.com/photos/5848055/pexels-photo-5848055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 9,
    category: "Dessert",
    veg: true,
    spicy: false,
    popular: false
  },
  {
    id: 44,
    name: "Tom Yum Soup",
    description: "Hot and sour soup with lemongrass, lime leaves, and shrimp",
    price: 11.99,
    image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 9,
    category: "Soup",
    veg: false,
    spicy: true,
    popular: false
  },
  {
    id: 45,
    name: "Satay Skewers",
    description: "Grilled chicken skewers with peanut sauce",
    price: 9.99,
    image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 9,
    category: "Appetizer",
    veg: false,
    spicy: false,
    popular: true
  },
  
  // BBQ Legends (id: 10)
  {
    id: 46,
    name: "Brisket Plate",
    description: "Slow-smoked beef brisket with two sides and cornbread",
    price: 18.99,
    image: "https://images.pexels.com/photos/8522778/pexels-photo-8522778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 10,
    category: "Plate",
    veg: false,
    spicy: false,
    popular: true
  },
  {
    id: 47,
    name: "Pulled Pork Sandwich",
    description: "Tender pulled pork with coleslaw on a brioche bun",
    price: 13.99,
    image: "https://images.pexels.com/photos/5718075/pexels-photo-5718075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 10,
    category: "Sandwich",
    veg: false,
    spicy: false,
    popular: true
  },
  {
    id: 48,
    name: "Ribs - Half Rack",
    description: "Tender pork ribs with house BBQ sauce",
    price: 16.99,
    image: "https://images.pexels.com/photos/8522776/pexels-photo-8522776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 10,
    category: "Ribs",
    veg: false,
    spicy: false,
    popular: true
  },
  {
    id: 49,
    name: "Mac and Cheese",
    description: "Creamy three-cheese macaroni topped with crispy breadcrumbs",
    price: 6.99,
    image: "https://images.pexels.com/photos/5484974/pexels-photo-5484974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 10,
    category: "Side",
    veg: true,
    spicy: false,
    popular: false
  },
  {
    id: 50,
    name: "Cornbread",
    description: "Sweet southern-style cornbread with honey butter",
    price: 4.99,
    image: "https://images.pexels.com/photos/6605654/pexels-photo-6605654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 10,
    category: "Side",
    veg: true,
    spicy: false,
    popular: false
  },
  // Bonus items to exceed 50 foods
  {
    id: 51,
    name: "BBQ Chicken",
    description: "Half chicken smoked and glazed with house BBQ sauce",
    price: 15.99,
    image: "https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 10,
    category: "Plate",
    veg: false,
    spicy: false,
    popular: false
  },
  {
    id: 52,
    name: "Smoked Sausage",
    description: "House-made smoked sausage links with two sides",
    price: 14.99,
    image: "https://images.pexels.com/photos/6419754/pexels-photo-6419754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    restaurantId: 10,
    category: "Plate",
    veg: false,
    spicy: true,
    popular: false
  }
];