import ProductCard from './components/ProductCard'
import './App.css'

function App() {
return (
<> <header className="header"> <h1>ShopKart</h1> <p>Mini storefront — built while learning React</p> </header>


  <main className="product-grid">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </main>
</>


)
}

export default App
