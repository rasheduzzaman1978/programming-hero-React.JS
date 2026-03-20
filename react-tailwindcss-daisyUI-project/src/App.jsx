

import Navbar from './conponents/Navbar/Navbar';

import './App.css'
import NavLink from './conponents/Navbar/NavLink';
import DaisyNav from './conponents/DaisyNav/DaisyNav';
import { Suspense } from 'react';
import PricingOptions from './conponents/PricingOptions/PricingOptions';
import ResultChart from './conponents/ResultChart/ResultChart';
import axios from 'axios';
import MarkChart from './conponents/MarkChart/MarksChart';


const pricingPromise = fetch('pricingData.json').then (res => res.json());

const marksPromise = axios.get('marksData.json')

function App() {
 

  return (
    <>
    
    <header>
      
     <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
    </header>

    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>


      <Suspense  fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <MarkChart marksPromise={marksPromise}></MarkChart>
      </Suspense>

      <ResultChart></ResultChart>

    </main>
      
    </>
  )
}

export default App
