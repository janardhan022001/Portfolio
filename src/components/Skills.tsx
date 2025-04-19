import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    { 
      name: "C++", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      description: "Proficient in C++ programming, object-oriented design, and competitive programming concepts."
    },
    { 
      name: "DBMS", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      description: "Good understanding of database management systems, normalization, and query optimization."
    },
    { 
      name: "HTML", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      description: "Proficient in creating structured and semantic HTML content for web development."
    },
    { 
      name: "CSS", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      description: "Skilled in designing responsive and visually appealing layouts using CSS."
    },
    { 
      name: "JavaScript", 
      image: "https://tse1.mm.bing.net/th?id=OIP.YPYdVAg5ieRspLI6HIpmDQHaIB&pid=Api",
      description: "Strong knowledge of JavaScript for dynamic web interactivity and frontend development."
    },
    { 
      name: "ReactJS", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "Experienced in building interactive and efficient single-page applications using ReactJS."
    },
    { 
      name: "Python", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      description: "Skilled in Python programming for scripting, automation, and data analysis."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
          <p className="text-center text-gray-700 mb-12">
            I have expertise in various technologies and programming languages which include:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="border border-gray-200 bg-pink-200 hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="mb-4 mt-2">
                    <img 
                      src={skill.image} 
                      alt={skill.name} 
                      className="h-20 w-20 object-contain" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-600 text-center">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
