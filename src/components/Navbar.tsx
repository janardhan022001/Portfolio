import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link'; // Import HashLink

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll handler to determine the active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      const sections = ['about', 'skills', 'projects', 'contact'];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount to check initial section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update the background class based on scroll
  const navBgClass = scrolled ? 'bg-black' : 'bg-transparent';

  // Function to get the link class dynamically
  const getLinkClass = (id: string) =>
    `text-lg font-bold transition-colors ${
      activeSection === id ? 'text-gray-400' : 'text-white hover:text-gray-300'
    }`;

  // Scroll to top for Home link
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-white text-lg font-bold"> {/* Logo or Brand */} </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center space-x-6">
              <HashLink
                to="#home"
                className={getLinkClass('home')}
                onClick={handleHomeClick} // Handle smooth scroll to top
              >
                Home
              </HashLink>
              <HashLink
                to="#about"
                className={getLinkClass('about')}
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
              >
                About
              </HashLink>
              <HashLink
                to="#skills"
                className={getLinkClass('skills')}
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
              >
                Skills
              </HashLink>
              <HashLink
                to="#projects"
                className={getLinkClass('projects')}
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
              >
                Projects
              </HashLink>
              <HashLink
                to="#contact"
                className={getLinkClass('contact')}
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact
              </HashLink>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/janardhan022001"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 p-2 rounded-full text-white hover:bg-blue-800 transition"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/janardhan-chikale-702175306"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 p-2 rounded-full text-white hover:bg-blue-800 transition"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/janardhanchikale"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 p-2 rounded-full text-white hover:bg-blue-800 transition"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
