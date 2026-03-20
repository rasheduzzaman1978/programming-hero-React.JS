import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Audio } from 'react-loader-spinner';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(false); // demo

  if (loading) {
    return <Audio height="80" width="80" color="green" />;
  }

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      
      <h2>My Website</h2>

      <Hamburger 
        toggled={isOpen} 
        toggle={setOpen} 
        size={25} 
        color="blue"
      />

    </nav>
  );
};

export default Navbar;