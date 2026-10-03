// import products from "./data/products";
import ProductCard from "./components/ProductCard";
import { useState } from "react";

import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0);
  const addToCart = () => {
  setCartCount(cartCount + 1);
};
  return (
   <div className="app">
      <header className="header">
        <h1>ShopKart</h1>
        <p>Mini storefront — built while learning React</p>
        <p>Cart: {cartCount}</p>
      </header>
      <main className="grid">
        <ProductCard image="🎧" name="Wireless HeadPhones" price="$22,999"   addToCart={addToCart} />
        <ProductCard image="🖱️"name="Mouse" price="$299"   addToCart={addToCart}/>
        <ProductCard image= "⌨️" name= "KeyBoard" price="$499"   addToCart={addToCart}/>
        <ProductCard name="MousePad" price="$199"    addToCart={addToCart}/>
      </main>
      
    </div>
  );
}

export default App;
