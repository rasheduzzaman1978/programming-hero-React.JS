import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import DataLoader from './components/DataLoader';

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} />

      <p>{isOpen ? "Menu Open" : "Menu Closed"}</p>

      <DataLoader></DataLoader>
    </div>
  );
};

export default App;