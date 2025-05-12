import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='absolute z-30 bg-white rounded-2xl border border-grey-600 top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 py-20'>
      <div className='flex justify-center'>
        <div className='flex items-center bg-gray-100 rounded-full px-4 py-1 shadow-sm'>
          <span className='font-medium text-black mr-3'>
            <span className='bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text'>4000+</span> Users trust us for design
          </span>
          <Imagegrid />
        </div>
      </div>
    </div>
  );
};

export default Hero;

const Imagegrid = () => {
  const Images = ["/avatar1.jpeg", "/avatar2.jpeg", "/avatar3.jpeg"];
  return (
    <div className='flex -space-x-1'>
      {Images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="avatar"
          height={20}
          width={20}
        />
      ))}
    </div>
  );
};
