import React, {use} from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';


const PricingOptions = ({pricingPromise}) => {

  const pricingData = use(pricingPromise);
  // console.log(pricingData);

  return (
    <div>
      <h2 className='text-5xl text-center mt-6 mb-6'>Get Our Membership</h2>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4'>

        {/* {
          pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
        } */}

        {/* DaisyPricingCard  */}

        {
          pricingData.map(pricing => <DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>)
        }

      </div>
    </div>
  );
};

export default PricingOptions;