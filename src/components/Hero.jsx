import React from 'react';
import Text from './Text';
import { arrowTrendUp } from '../assets';
import Button from './Button';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-[1000px] px-4">
      <Text
        size="text-5xl"
        weight="font-black"
        className="tracking-tight bg-gradient-to-r from-white to-indigo-600 bg-clip-text text-transparent"
        align="text-center"
      >
        Eager to Build the Future of Software with Innovative Solutions
      </Text>

      <Text
        size="text-[20px]"
        weight="font-regular"
        color="text-white"
        className="mt-6"
        align="text-center"
      >
        Hi, I am Rhoebie, a Junior Software Developer based in the Philippines.
      </Text>

      <div className="mt-6 flex items-center justify-center">
        <Button onClick={() => {
          alert('Button clicked');
        }} size="md" variant="primary" icon={arrowTrendUp}>
          See my capstone
        </Button>
      </div>
    </div>
  );
};

export default Hero;
