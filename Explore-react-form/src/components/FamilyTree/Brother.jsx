import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {

    const [money, setMoney] = use(MoneyContext);
    return (
        <div className='border-2 border-amber-600 p-2 rounded-2xl'>
            <h3>Brother</h3>
            <p>Money: ${money.toLocaleString()}</p>
            <button onClick={() => setMoney(money + 100000)} className='btn'>
                Add Money 100000
            </button>
        </div>
    );
};

export default Brother;