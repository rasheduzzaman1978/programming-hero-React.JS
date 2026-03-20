
import NavBar from './components/NavBar/NavBar';

import './App.css'
// import Link from './components/NavBar/Link';
import { Suspense } from 'react';
import PricingOptions from './components/PricingOptions/PricingOptions';
import ResultChart from './components/ResultChart/ResultChart';
import axios from 'axios';
import MarksChart from './components/MarkChart/MarksChart';
// import DaisyNavbar from './components/DaisyNav/DaisyNavbar';

import { Oval } from 'react-loader-spinner';


const pricingPromise = fetch('pricingData.json').then (res => res.json());

const marksPromise = axios.get('marksData.json');

const Loader = () => (
  <div className="flex justify-center items-center h-40">
    <Oval height={60} width={60} color="#4fa94d" visible={true} />
  </div>
);

function App() {
  

  return (
    <>
    
      <header>
        <NavBar></NavBar>
    {/* <DaisyNavbar></DaisyNavbar> */}
    </header>
    
    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>


      <Suspense  fallback={<Loader></Loader>}>
      <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>

      <ResultChart></ResultChart>
      
    </main>
     
     
    </>
  )
}

export default App
