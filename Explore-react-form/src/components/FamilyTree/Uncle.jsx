import React from 'react';
import Cousin from './Cousin';

    const Uncle = () => {
        return (
            <div className='border-2 border-amber-600 p-4  rounded-2xl'>
                <h3 className='text-center'>Uncle</h3>
                <section className='flex gap-2 justify-content items-center'>
                    <Cousin name='Zakir'></Cousin>
                    <Cousin name='Tanvir'></Cousin>
                </section>
            </div>
        );
};

export default Uncle;