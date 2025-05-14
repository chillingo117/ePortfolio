import React from 'react';
import { ContactLinks } from './ContactLinks';

const Contact: React.FC = () => {  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
          </p>
        </div>
        
        <div>
          <div className="flex justify-center">
            <ContactLinks/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;