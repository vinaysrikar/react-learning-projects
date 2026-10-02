function Button() {
  const handleClick = () => {
    alert("Added to cart!");
  }
return ( 
      <button type="button" onClick={handleClick}>Add to Cart </button>
)
}

export default Button;
