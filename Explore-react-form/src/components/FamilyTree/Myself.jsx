import React from 'react';
import Special from './Special';

const Myself = ({ asset }) => {
    return (
        <div className='border-2 border-amber-600 p-2 rounded-2xl'>
            <h3>Myself</h3>
            <Special asset={asset}></Special>
        </div>
    );
};

export default Myself;