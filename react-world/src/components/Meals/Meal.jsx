const Meal = ({ meal, handleAddToCart, handleShowDetails }) => {
  const { strMeal, strMealThumb, strCategory } = meal;

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "15px", padding: "15px", backgroundColor: "#fff" }}>
      <img src={strMealThumb} alt={strMeal} style={{ width: "100%", borderRadius: "10px" }} />
      <h3>{strMeal}</h3>
      <p>Category: {strCategory}</p>
      
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={handleAddToCart} style={{ background: '#2ed573', color: 'white', border: 'none', padding: '8px', borderRadius: '5px' }}>
          Add to Cart
        </button>
        
        {/* ডিটেইলস দেখার বাটন */}
        <button onClick={() => handleShowDetails(meal)} style={{ background: '#1e90ff', color: 'white', border: 'none', padding: '8px', borderRadius: '5px' }}>
          Details
        </button>
      </div>
    </div>
  );
};

export default Meal;