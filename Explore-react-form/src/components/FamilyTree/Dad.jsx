import React from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';

const Dad = ({ asset }) => {
    return (
        <div>
            <div className='border-2 border-amber-600 p-4 rounded-2xl'>
                <h3 className='text-center'>Dad</h3>
            <section className='flex items-center justify-center gap-4'>
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
            </div>
        </div>
    );
};

export default Dad;