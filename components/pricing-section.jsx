import React from 'react'
import PricingCards from './ui/pricing'

const Pricingsection = () => {
  return (
    <div className='absolute z-50 top-[120rem] w-full'>
        <div className='flex flex-col items-center text-center justify-center'>
            <div className='rounded-2xl border border-gray-500 px-2 py-2'>Flexible-3-Plans</div>
            <div className='font-bold py-3 text-3xl'>Simple and Transparent Pricing</div>
            <div className='text-gray-600 font font-thin'>Enjoy the full experience with no hidden fees or surprises!</div>
        </div>
        <PricingCards/>
    </div>
  )
}

export default Pricingsection
