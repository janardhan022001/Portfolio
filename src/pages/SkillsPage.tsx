
import React from 'react';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

const SkillsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20">
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default SkillsPage;
