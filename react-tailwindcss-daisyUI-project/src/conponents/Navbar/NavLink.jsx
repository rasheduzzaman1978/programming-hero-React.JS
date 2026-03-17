import React from 'react';

const NavLink = ({route}) => {
  return (
     <li className='px-4 lg:mr-10 hover:bg-amber-500'>
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default NavLink;