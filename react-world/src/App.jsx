import { Suspense } from 'react';
import './App.css';
import Countries from './components/countries/Countries';
import MealsData from './components/Meals/MealsData';

// Countries এর জন্য প্রোমিস
const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());

function App() {
  return (
    <div className="App">
            
      <section style={{ border: '1px solid gray', padding: '15px', borderRadius: '15px' }}>
        <h2>Explore Countries</h2>
        <Suspense fallback={<p>Loading Countries information...</p>}>
          <Countries countriesPromise={countriesPromise} />
        </Suspense>
      </section>

      <hr />

      <section style={{ marginTop: '50px' }}>
        <h1 style={{ color: '#ff4757' }}>🍜 Meal DB Project</h1>
        <MealsData />
      </section>
    </div>
  );
}

export default App;