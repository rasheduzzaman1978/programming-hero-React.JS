import React from 'react';

const Link = ({item}) => {
  return (
  
    <li className='lg:mr-4 mb-2 hover:bg-amber-400 text-gray-400 hover:text-gray-900 px-4'>
      <a href={item.path}>{item.name}</a>
    </li>
  );
};

export default Link;