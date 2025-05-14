import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { ContactLinks } from './ContactLinks';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              William Chen
            </h2>
            <p className="mt-2 text-gray-400 max-w-md">
              Full Stack Developer specialising in AI/ML applications.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <ContactLinks />
            </div>
            
            <button
              onClick={scrollToTop}
              className="group flex items-center text-gray-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <span className="mr-2 group-hover:-translate-y-1 transition-transform duration-300">
                <ArrowUp size={16} />
              </span>
              Back to top
            </button>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;