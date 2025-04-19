import React from 'react';
import { Button } from '@/components/ui/button';
import { HashLink } from 'react-router-hash-link'; // 👈 import HashLink

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('./src/assets/thumb.png')",
          filter: "brightness(0.9)"
        }}
        aria-hidden="true"
      ></div>
      <div 
        className="absolute inset-0 bg-black bg-opacity-40 z-1"
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-xl ml-10 md:ml-20 pb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            I love to create
            <br />
            efficient websites
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/src/assets/Janardhan_Chikale.pdf" download>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded">
                Download CV
              </Button>
            </a>
            <HashLink
              to="#contact"
              scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
            >
              <Button variant="outline" className="bg-white/80 text-gray-800 py-2 px-6 rounded border border-gray-300 hover:bg-white">
                Contact Me
              </Button>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
