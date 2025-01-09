import { useReducer } from 'react';
import ProductCard from './components/product-card/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const reducer = (state, action) => {
    switch(action.type)
    {
      case "Add-to-cart":
        return {...state, 
          cartItems:[...state.cartItems, action.product],
          cartTotal:state.cartTotal + action.product.price
        }
        console.log(action.product.price);
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    data:[
      {
        "id": 1,
        "name": "Wireless Bluetooth Headphones",
        "description": "High-quality wireless headphones with noise cancellation and 20 hours of battery life.",
        "price": 89.99,
        "category": "Electronics",
        "brand": "SoundX",
        "rating": 4.5,
        "image": "https://example.com/images/headphones.jpg",
        "availability": "In Stock",
        "tags": ["bluetooth", "wireless", "headphones", "electronics"]
      },
      {
        "id": 2,
        "name": "Smartphone 6.5\" OLED Display",
        "description": "A sleek and powerful smartphone with a 6.5\" OLED display and 128GB storage.",
        "price": 749.99,
        "category": "Mobile Phones",
        "brand": "TechNova",
        "rating": 4.7,
        "image": "https://example.com/images/smartphone.jpg",
        "availability": "Out of Stock",
        "tags": ["smartphone", "oled", "mobile", "electronics"]
      },
      {
        "id": 3,
        "name": "Stylish Leather Wallet",
        "description": "Premium leather wallet with multiple card slots and a minimalist design.",
        "price": 39.99,
        "category": "Accessories",
        "brand": "UrbanCraft",
        "rating": 4.2,
        "image": "https://example.com/images/wallet.jpg",
        "availability": "In Stock",
        "tags": ["leather", "wallet", "accessories", "fashion"]
      },
      {
        "id": 4,
        "name": "4K Ultra HD Smart TV",
        "description": "Enjoy crystal-clear 4K resolution and smart features with this 55\" Ultra HD TV.",
        "price": 499.99,
        "category": "Home Appliances",
        "brand": "VisionPlus",
        "rating": 4.8,
        "image": "https://example.com/images/smart-tv.jpg",
        "availability": "In Stock",
        "tags": ["tv", "4k", "smart", "home appliances"]
      },
      {
        "id": 5,
        "name": "Coffee Maker with Grinder",
        "description": "Automatic coffee maker with a built-in grinder, perfect for fresh morning coffee.",
        "price": 129.99,
        "category": "Kitchen Appliances",
        "brand": "BrewMaster",
        "rating": 4.3,
        "image": "https://example.com/images/coffeemaker.jpg",
        "availability": "In Stock",
        "tags": ["coffee maker", "kitchen", "appliance", "brew"]
      },
      {
        "id": 6,
        "name": "Gaming Laptop - RTX 3070",
        "description": "High-performance gaming laptop with RTX 3070 GPU and 16GB RAM for seamless gaming experience.",
        "price": 1499.99,
        "category": "Computers",
        "brand": "GamerPro",
        "rating": 4.9,
        "image": "https://example.com/images/gaming-laptop.jpg",
        "availability": "In Stock",
        "tags": ["gaming", "laptop", "RTX", "computers"]
      },
      {
        "id": 7,
        "name": "Electric Toothbrush with UV Sanitizer",
        "description": "Sonic electric toothbrush with UV sanitizer for a cleaner, healthier smile.",
        "price": 69.99,
        "category": "Personal Care",
        "brand": "BrushTech",
        "rating": 4.6,
        "image": "https://example.com/images/electric-toothbrush.jpg",
        "availability": "In Stock",
        "tags": ["toothbrush", "electric", "personal care", "health"]
      },
      {
        "id": 8,
        "name": "Portable Bluetooth Speaker",
        "description": "Compact and portable Bluetooth speaker with rich sound quality and 12 hours of battery life.",
        "price": 59.99,
        "category": "Electronics",
        "brand": "SoundWave",
        "rating": 4.4,
        "image": "https://example.com/images/bluetooth-speaker.jpg",
        "availability": "In Stock",
        "tags": ["bluetooth", "speaker", "portable", "electronics"]
      },
      {
        "id": 9,
        "name": "Organic Cotton T-shirt",
        "description": "Comfortable and eco-friendly T-shirt made from 100% organic cotton.",
        "price": 19.99,
        "category": "Fashion",
        "brand": "EcoWear",
        "rating": 4.1,
        "image": "https://example.com/images/t-shirt.jpg",
        "availability": "In Stock",
        "tags": ["t-shirt", "organic", "cotton", "fashion"]
      },
      {
        "id": 10,
        "name": "Electric Kettle with Temperature Control",
        "description": "Electric kettle with adjustable temperature settings, perfect for tea and coffee enthusiasts.",
        "price": 39.99,
        "category": "Kitchen Appliances",
        "brand": "HotBrew",
        "rating": 4.5,
        "image": "https://example.com/images/electric-kettle.jpg",
        "availability": "In Stock",
        "tags": ["kettle", "electric", "temperature control", "kitchen"]
      }
    ], 
    cartItems:[],
    cartTotal:0,
  });
  const addToCart = (product) => {
   dispatch({type:"Add-to-cart", product})
  }
  return (
    <div className="App my-5">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-10'>
            <div className='row g-2'>
              {state.data.map((item) => <ProductCard title={item.name} description={item.description} price={item.price} addToCart={addToCart}></ProductCard>)}
            </div>
          </div>
          <div className='col-lg-2'>
            <h4>Cart List</h4>
            {state.cartItems.map((item) => <h6>{item.title}</h6>)}
            <p>Cart Count:{state.cartItems.length}</p>
            <p><strong>Cart Total:{state.cartTotal}</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
