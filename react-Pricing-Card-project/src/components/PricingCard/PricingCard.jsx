import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
  console.log(pricing);

  const { name, price_bdt, description, features } = pricing;

  return (
    <div className='border flex flex-col bg-amber-600 rounded-2xl p-4'>
      {/* Card header */}
      <div className='space-y-2'>
        <h1 className='text-2xl md:text-3xl lg:text-5xl'>{name}</h1>
        <h4 className='text-base md:text-xl lg:text-2xl'>{price_bdt} Tk</h4>
      </div>

      {/* card body */}
      <div className='bg-amber-400 p-4 rounded-2xl mt-10 flex-1'>
        <p>{description}</p>

        {
          features.map((feature, index) => <PricingFeatures key={index} feature={feature}></PricingFeatures>)
        }
      </div>
      <button className="btn w-full mt-4">Subscribe</button>
    </div>
  );
};

export default PricingCard;