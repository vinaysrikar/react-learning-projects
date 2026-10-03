function Button({ addToCart }) {
  return (
    <button type="button" onClick={addToCart}>
      Add to Cart
    </button>
  );
}

export default Button;