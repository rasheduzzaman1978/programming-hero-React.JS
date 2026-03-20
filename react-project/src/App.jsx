import './App.css'
import NavBar from './components/NavBar/NavBar'
import DaisyNavbar from './components/DaisyNav/DaisyNavbar';
import { Suspense } from 'react';
import PricingOptions from './components/PricingOptions/PricingOptions';


const pricingPromise = fetch('pricingData.json').then (res => res.json());

function App() {
  

  return (
    <>
    
      <header>
        <NavBar></NavBar>
    {/* <DaisyNavbar></DaisyNavbar> */}
    </header>
    
    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-sm"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
    </main>
     
     
    </>
  )
}

export default App
