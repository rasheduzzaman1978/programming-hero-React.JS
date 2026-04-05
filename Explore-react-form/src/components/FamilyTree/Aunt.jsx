import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({ asset }) => {

    const [money, setMoney] = use(MoneyContext);

    const handleAddMoney = () => {
        setMoney(money + 5000);
    };

    return (
         <div className='border-2 border-amber-600 p-4  rounded-2xl'>
                <h3 className='text-center'>Aunt</h3>
                <section className='flex gap-2 justify-content items-center'>
                    <Cousin asset={asset} name='Rayhan'></Cousin>
                    <Cousin name='Baby'></Cousin>
                    <button onClick={handleAddMoney} className='btn'>Add 5000 tk</button>
                </section>
            </div>
    );
};

export default Aunt;