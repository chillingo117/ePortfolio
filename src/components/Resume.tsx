import React from 'react';
import { FileText, Download, Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      period: 'Jan 2021 - Present',
      description: 'Lead the frontend development team in building scalable web applications. Implemented modern React patterns and optimized performance across multiple projects.'
    },
    {
      title: 'Full Stack Developer',
      company: 'WebSolutions Agency',
      period: 'Mar 2018 - Dec 2020',
      description: 'Developed full-stack applications using React, Node.js, and MongoDB. Collaborated with designers to implement responsive UIs and optimize user experiences.'
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Creatives',
      period: 'Jun 2016 - Feb 2018',
      description: 'Created responsive websites for clients across various industries. Worked with HTML, CSS, JavaScript, and began specializing in React development.'
    }
  ];

  const education = [
    {
      degree: 'B.S. Computer Science',
      institution: 'Tech University',
      period: '2012 - 2016',
      description: 'Graduated with honors. Specialized in web development and software engineering.'
    },
    {
      degree: 'Web Development Bootcamp',
      institution: 'Coding Academy',
      period: '2016',
      description: 'Intensive 12-week program focusing on modern JavaScript frameworks and full stack development.'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Resume & Experience
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <a 
            href="/resume.pdf" 
            download
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all shadow-md hover:shadow-lg"
          >
            <Download size={20} className="mr-2" />
            <span>Download Resume</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center mb-8">
              <Briefcase size={24} className="text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>
            
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 pb-6">
              {experiences.map((exp, index) => (
                <div key={index} className={`mb-10 ${index === experiences.length - 1 ? '' : ''}`}>
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] mt-1.5"></div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h4>
                  <div className="flex items-center mt-1 mb-2">
                    <span className="text-blue-500 font-medium">{exp.company}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap size={24} className="text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>
            
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 pb-6">
              {education.map((edu, index) => (
                <div key={index} className={`mb-10 ${index === education.length - 1 ? '' : ''}`}>
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] mt-1.5"></div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <div className="flex items-center mt-1 mb-2">
                    <span className="text-blue-500 font-medium">{edu.institution}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{edu.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <div className="flex items-center mb-6">
                <FileText size={24} className="text-blue-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 dark:text-white font-medium">AWS Certified Developer</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Amazon Web Services • 2022</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 dark:text-white font-medium">Professional Scrum Master I</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Scrum.org • 2021</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;