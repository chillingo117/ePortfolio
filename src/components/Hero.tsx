import React from 'react';
import { ArrowDown } from 'lucide-react';
import { ContactLinks } from './ContactLinks';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-40 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block">Hi, I'm </span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              William Chen
            </span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl max-w-2xl mx-auto md:mx-0 text-gray-600 dark:text-gray-300">
            Full Stack Developer & AI/ML Enthusiast
          </p>
          <p className="mt-6 max-w-2xl text-lg text-gray-500 dark:text-gray-400 mx-auto md:mx-0">
            3+ years of code development with React, TypeScript, C#, and SQL. Specialised in AI/ML, passionate about creating solutions that make a difference.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-md hover:shadow-lg"
            >
              View Projects
            </a>
          </div>
          
          <div className="mt-10 flex gap-6 justify-center md:justify-start">
            <ContactLinks />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <button onClick={scrollToAbout} aria-label="Scroll to about section">
          <ArrowDown className="text-gray-500 dark:text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;