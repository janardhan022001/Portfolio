
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img 
                src="/src/assets/MyPhoto.png" 
                alt="Professional portrait" 
                className="rounded-lg shadow-lg max-w-full max-w-[500px] h-auto max-h-[500px] object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-4">
              I’m Janardhan Madhav Chikale, a passionate and driven Computer Science and Engineering student at MIT Academy of Engineering, Pune, with a strong foundation in C++, web development, and data analytics. I am hardworking, disciplined, and honest about my work, always committed to giving my best in everything I do.
              </p>
              <p className="text-gray-700 mb-4">
              With hands-on experience in projects involving blockchain, cloud computing, and machine learning, I constantly strive to enhance my skills through real-world challenges and continuous learning. I’ve completed virtual internships supported by Google for Developers and Alteryx, where I developed practical skills in Python, AI/ML, data manipulation, and automation.
              </p>
              <p className="text-gray-700">
              Beyond academics, I enjoy reading books and learning new things. I actively participate in technical events like Datathon' 24 and always seek opportunities to collaborate, innovate, and grow in the tech ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
