import React from 'react';
import { FileText, Download, Briefcase, GraduationCap, HeartHandshake } from 'lucide-react';

const Resume: React.FC = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Phocas Software',
      period: 'Feb 2023 - Mar 2025',
      description: 'Developed the Phocas AI using React, Node.js, and LangChain. Extended the main Phocas application to better integrate the AI, working in C#, .NET, SQL Server, and MongoDB. Enriched the AI\'s context with tool calls that utilise API functions and developed interfaces that allow the AI to interact with the rest of the application.'
    },
    {
      title: 'Graduate Developer',
      company: 'Phocas Software',
      period: 'Dec 2021 - Feb 2023',
      description: 'Developed data pipelines and ETL processes using C#, .NET, and SQL Server. Included extensions to the frontend pages, participating in the migration from Cypress to Playwright tests, and migrating from legacy jQuery to React.'
    },
    {
      title: 'Multivariable Methods Tutor ',
      company: 'University of Canterbury',
      period: 'Feb 2021 - June 2021',
      description: 'Tutored Data203: Data Science Multivariable Methods. Aided students in understanding the course material and provided support for assignments and exam preparation. Reported to the course coordinator and provided feedback on student performance.'
    }
  ];

  const education = [
    {
      degree: 'Master of Information Technology (AI)',
      institution: 'University of Melbourne',
      period: '2023 - 2025',
      description: 'Included in the Dean\'s Honour List 2024, placing me in the top 5% of masters in my course. Specialized in AI, ML, and Software Project Management.'
    },
    {
      degree: 'B.S. Science (Computer Science and Data Science)',
      institution: 'University of Canterbury',
      period: '2019 - 2021',
      description: 'Graduated with a double major in three years by overloading subjects. Specialised in data processing and software engineering subjects.'
    }
  ];

  const volunteering = [
    {
      role: 'BCI Team Lead',
      organisation: 'MBSI - Project CereCe',
      period: '2023 - Present',
      description: 'Leading the brain computer interface (BCI) team in MBSI\'s Project CereCe. The project aims to develop a system that allows users to control a wheelchair using their brain activity.'
    },
    {
      role: 'Full Stack Developer',
      organisation: 'Air Training Corps No.17 Squadron (Christchurch)',
      period: '2021',
      description: 'Collaborated with two other students to develop a lesson management website for the Air Cadet\'s Christchurch squadron.'
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
            href="https://docs.google.com/document/d/1RwZUoihw8orlBH1GDHDajuVozFyzdKsF/edit?usp=sharing&ouid=101043576486668661366&rtpof=true&sd=true" 
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
            
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 ">
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

            <div className="flex items-center mb-8 mt-12">
              <HeartHandshake size={24} className="text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Volunteering
              </h3>
            </div>
            
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 pb-6">
              {volunteering.map((volun, index) => (
                <div key={index} className={`mb-10 ${index === education.length - 1 ? '' : ''}`}>
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] mt-1.5"></div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {volun.role}
                  </h4>
                  <div className="flex items-center mt-1 mb-2">
                    <span className="text-blue-500 font-medium">{volun.organisation}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{volun.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {volun.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* <div className="mt-12">
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
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;