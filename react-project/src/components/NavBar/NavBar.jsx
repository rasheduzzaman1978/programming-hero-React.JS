import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';


const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [open, setOpen] =useState(false);

  const links = navItems.map(item => <Link key={item.id} item={item}></Link>)

  return (
    <nav className='flex items-center mx-10 text-black mt-4'>
      
      <div className="flex items-center gap-4 flex-1">
    <div onClick={() => setOpen(!open)} className="md:hidden">
      {open ? <X /> : <Menu />}
    </div>

    <ul className={`md:hidden absolute duration-1000
          ${open ? 'top-12' : '-top-40'} 
          bg-amber-200`}>
          {links}
        </ul>
    <h3>My Navbar</h3>
  </div>

      

      <ul className='hidden md:flex flex-1 justify-center gap-6'>
        {
          links
        }

      </ul>
      
      <div className='flex-1 flex justify-end'>
        <button>Sign In</button>
      </div>

      {/* <ul className='flex gap-6 text-taupe-500 hover:text-taupe-800'>
        {
          navItems.map(item => (
          <a key={item.id} href={item.path}>
          {item.name}
           </a>))
        }
      </ul> */}

      {/* <ul className='flex gap-6'>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/blog'>Blog</a></li>
      </ul> */}
    </nav>
  );
};

export default NavBar;