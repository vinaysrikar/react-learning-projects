// import products from "./data/products";
import ProductCard from "./components/ProductCard";


import './App.css'

function App() {
  return (
   <div className="app">
      <header className="header">
        <h1>ShopKart</h1>
        <p>Mini storefront — built while learning React</p>
      </header>
      <main className="grid">
        <ProductCard image="🎧" name="Wireless HeadPhones" price="$22,999"/>
        <ProductCard image="🖱️"name="Mouse" price="$299"/>
        <ProductCard image= "⌨️" name= "KeyBoard" price="$499"/>
        <ProductCard name="MousePad" price="$199"/>
      </main>
    </div>
  );
}

export default App;
