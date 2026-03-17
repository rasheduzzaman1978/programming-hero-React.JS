import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const PricingFeature = ({feature}) => {
  return (
    <p className='flex gap-3 mt-4'> <CircleCheckBig></CircleCheckBig> {feature}</p>
  );
};

export default PricingFeature;