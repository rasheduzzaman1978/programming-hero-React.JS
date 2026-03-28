// App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DataLoader from './components/DataLoader';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <Navbar
        isOpen={isOpen}
        setOpen={setOpen}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <DataLoader searchText={searchText} />
    </>
  );
}

export default App;