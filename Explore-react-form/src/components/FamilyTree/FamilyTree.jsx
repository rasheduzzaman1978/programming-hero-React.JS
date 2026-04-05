import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = () => {

    const [money, setMoney] = useState(0);

    const asset = 'Diamond Ring';
    const newAsset = 'Luxury Car';
    
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-6'>Family Tree</h2>
            <h4>Money: ${money.toLocaleString()}</h4>
            
            
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <Grandpa asset={asset} />
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default FamilyTree;