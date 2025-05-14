import React from 'react';
import { Award, BookOpen, Briefcase } from 'lucide-react';
import profile from '../assets/profile.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-105 duration-300">
            <img 
              src={profile} 
              alt="Professional portrait" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I'm a passionate full-stack developer with over 3 years of experience building web applications in technical and interesting domains. My journey in tech began with a curiosity to learn anything and everything, which evolved into a career creating practical applications for complex systems.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              What sets me apart is my generalist skillset and a passion to learn more, a strong foundation for adapting to any and all software tasks. I thrive in environments that challenge me to think critically and creatively, and I am always looking for opportunities to grow and expand my knowledge.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Briefcase size={20} className="text-blue-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Professional Experience</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">3+ years building enterprise-level web applications</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen size={20} className="text-blue-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Education</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Master of Information Technology from the University of Melbourne</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Award size={20} className="text-blue-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Achievements</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Top 5% of Masters students in M.I.T. at the University of Melbourne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;