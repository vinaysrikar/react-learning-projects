import products from "./data/products";
import ProductCard from "./components/ProductCard";
import SectionHeader from "./components/SectionHeader";

function App() {
  return (
    <main>
      <SectionHeader title="Featured Products" />

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}

export default App;