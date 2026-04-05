import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousin = ({name, asset}) => {
    return (
        <div className='border-2 border-amber-600 p-2 rounded-2xl'>
            <h3 className='text-center'>{name}</h3>
            {
                name === 'Rayhan' && <Special asset={asset} />
            }
            {
                name === 'Zakir' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;