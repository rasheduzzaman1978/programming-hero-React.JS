import { useEffect, useState } from "react";
import Meal from "./Meal";

const MealsData = () => {
  const [meals, setMeals] = useState([]);
  const [searchText, setSearchText] = useState("chicken");
  const [cartCount, setCartCount] = useState(0);
  
  // নতুন স্টেট: কোন খাবারটি বর্তমানে সিলেক্ট করা হয়েছে
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleAddToCart = () => setCartCount(cartCount + 1);

  // ডিটেইলস দেখানোর ফাংশন
  const handleShowDetails = (meal) => {
    setSelectedMeal(meal);
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []));
  }, [searchText]);

  const getIngredients = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    
    // যদি ইনগ্রেডিয়েন্ট থাকে, তবেই লিস্টে যোগ করো
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }
  return ingredients;
};

  return (
    <div style={{ padding: "20px" }}>
      <h2>Added to Cart: {cartCount}</h2>
      <input 
        type="text" 
        onChange={(e) => setSearchText(e.target.value)} 
        placeholder="Search..." 
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
        {meals.map((meal) => (
          <Meal 
            key={meal.idMeal} 
            meal={meal} 
            handleAddToCart={handleAddToCart}
            handleShowDetails={handleShowDetails} // চাইল্ডকে ফাংশনটি দিলাম
          />
        ))}
      </div>

      {/* মোডাল বা পপ-আপ অংশ */}
    {selectedMeal && (
  <div style={modalStyles.overlay}>
    <div style={modalStyles.content}>
      
      {/* নতুন লেআউট: Flexbox ব্যবহার করে */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', textAlign: 'left' }}>
        
        {/* বাম পাশ: টাইটল ও বাকি তথ্য */}
        <div style={{ flex: 1 }}>
          <h2 style={{ color: '#ff4757', marginTop: 0 }}>{selectedMeal.strMeal}</h2>
          <p><strong>Category:</strong> {selectedMeal.strCategory}</p>
          <strong>Ingredients:</strong>
          <ul style={{ fontSize: '14px' }}>
            {getIngredients(selectedMeal).map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>

        {/* ডান পাশ: ইমেজ */}
        <img 
          src={selectedMeal.strMealThumb} 
          style={{ width: "200px", borderRadius: "15px", flexShrink: 0 }} 
          alt={selectedMeal.strMeal} 
        />
      </div>

      {/* নিচে ইনস্ট্রাকশন ও ক্লোজ বাটন */}
      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <strong>Cooking Instructions:</strong>
        <p style={{ fontSize: '14px', lineHeight: '1.6' }}>{selectedMeal.strInstructions}</p>
      </div>
      
      <button onClick={() => setSelectedMeal(null)} style={modalStyles.closeBtn}>Close</button>
    </div>
  </div>
)}
    </div>
  );
};

// সিম্পল সিএসএস স্টাইল অবজেক্ট
const modalStyles = {
  overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  content: { background: 'white', padding: '20px', borderRadius: '15px', maxWidth: '500px', textAlign: 'center' },
  closeBtn: { marginTop: '10px', padding: '10px 20px', backgroundColor: '#ff4757', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }
};

export default MealsData;