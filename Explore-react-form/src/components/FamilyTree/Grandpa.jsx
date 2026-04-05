
import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = ({ asset }) => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100 rounded-3xl shadow-xl border border-orange-200">
            <h3 className="text-3xl font-bold text-center text-orange-700 mb-6">
                Grandpa
            </h3>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-md p-4 border border-orange-100 hover:shadow-xl transition duration-300">
                    <Dad asset={asset} />
                </div>

                <div className="bg-white rounded-2xl shadow-md p-4 border border-orange-100 hover:shadow-xl transition duration-300">
                    <Uncle />
                </div>

                <div className="bg-white rounded-2xl shadow-md p-4 border border-orange-100 hover:shadow-xl transition duration-300">
                    <Aunt asset={asset}/>
                </div>
            </section>
        </div>
    );
};

export default Grandpa;

