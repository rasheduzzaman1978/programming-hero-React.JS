


import './App.css';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectecPlayers/SelectedPlayers';
import { Suspense, useState } from 'react';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';


const fetchPlayers = async () => {
  const res = await fetch(`${import.meta.env.BASE_URL}players.json`)
  return res.json();
}

function App() {
  const [toggle, setToggle] = useState(true);

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [availableBalance, setAvailableBalance] = useState(6000000);
  
  const playersPromise = fetchPlayers();
  return (
    <>
      <Toaster position="top-center" />
       
      
      
      <Navbar availableBalance={availableBalance}></Navbar>

      <Hero></Hero>
      
      {/* Available/Selected Players  */}
      <div className='max-w-6xl mx-auto flex justify-between items-center'>

      <h1 className='text-[18px] sm:text-xl md:text-2xl lg:text-[28px] font-bold px-2'>
  {toggle
    ? "Available Players"
    : `Selected Players (${selectedPlayers.length}/6)`}
</h1>

{selectedPlayers.length >= 6 && (
  <p className="text-red-500 font-semibold mt-2">
    You have already selected 6 players!
  </p>
)}

      <div>
        <button onClick={() => setToggle(true)} className={`py-1 md:py-2 lg:py-3 px-2 md:px-4 lg:px-6 border border-gray-400 rounded-l-2xl text-sm md:text-base font-bold border-r-0 ${toggle === true ? "bg-[#E7FE29]" : ""}`}>Available</button>
      <button onClick={() => setToggle(false)} className={`py-1 md:py-2 lg:py-3 px-2 md:px-4 lg:px-6 border border-gray-400 rounded-r-2xl text-sm md:text-base border-l-0 mr-2 ${toggle === false ? "bg-[#E7FE29]" : ""}`}>Selected <span>({selectedPlayers.length})</span></button>
      </div>
      </div>
      
      {
        toggle === true 
        ? <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <AvailablePlayers setAvailableBalance={setAvailableBalance}
  availableBalance={availableBalance}
  playersPromise={playersPromise} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayers>
      </Suspense> 
      : <SelectedPlayers 
      selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} 
      setAvailableBalance={setAvailableBalance}
      setToggle={setToggle}>
     </SelectedPlayers> 

      }

    <Subscribe />
    <Footer />
    </>
  )
}

export default App
