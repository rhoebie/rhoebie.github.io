import React from 'react';
import { spotlightLeft, spotlightRight } from './assets';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import { Toaster } from 'react-hot-toast';
import { About, Process } from './components/sections';

const App = () => {
  return (
    <>
      <Toaster />
      <div className="relative z-0 bg-black">
        <div className="absolute top-0 left-0 z-10">
          <img
            src={spotlightLeft}
            alt="Overlay Left"
            className="w-auto h-auto select-none pointer-events-none"
          />
        </div>
        <div className="absolute top-0 right-0 z-10">
          <img
            src={spotlightRight}
            alt="Overlay Right"
            className="w-auto h-auto select-none pointer-events-none"
          />
        </div>

        <div id="home" className="w-full h-[900px] bg-hero-pattern relative flex items-center justify-center">
          <NavBar />
          <Hero />
        </div>

        <div className="flex flex-col gap-[150px]">
          <About />
          <Process />
        </div>
      </div>
    </>
  );
};

export default App;
