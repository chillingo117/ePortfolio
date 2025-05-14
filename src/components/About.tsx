import React from 'react';
import { Award, BookOpen, Briefcase } from 'lucide-react';

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
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Professional portrait" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I'm a passionate full-stack developer with over 5 years of experience building web applications that combine beautiful design with robust functionality. My journey in tech began with a curiosity about how things work and evolved into a career creating solutions that help businesses succeed.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              What sets me apart is my ability to bridge the gap between technical implementation and user experience. I believe that great software should not only work flawlessly but also be intuitive and enjoyable to use.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Briefcase size={20} className="text-blue-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Professional Experience</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">5+ years building enterprise-level web applications</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen size={20} className="text-blue-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Education</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">B.S. in Computer Science from Tech University</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Award size={20} className="text-blue-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Achievements</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Led development for award-winning applications</p>
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