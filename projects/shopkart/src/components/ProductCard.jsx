import Button from "./Button"
const ProductCard = ({image,name,price}) => {
  return (
     <div className="card">
      <div className="card-image">{image}</div>
      <h3>{name}</h3>
      <p className="price">{price}</p>
      <Button />
    </div>

     
  )
}

export default ProductCard;





//import Button from './Button'

// function ProductCard() {
// return ( <div className="product-card"> 
// <div className="product-image">🎧</div> 
// <h3>Wireless Headphones</h3> 
// <p className="price">₹2,999</p> 
// <Button /> </div>
// )
// }

// export default ProductCard

// function ProductCard({ product }) {
//   return (
//     <div className="product-card">
//       <div className="product-emoji">{product.emoji}</div>

//       <h3>{product.name}</h3>

//       <p>{product.category}</p>

//       <strong>₹{product.price}</strong>
//     </div>
//   );
// }

// export default ProductCard;
