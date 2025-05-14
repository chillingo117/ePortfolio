import React from 'react';
import skillsImages from '../assets/softwareSkillsImages/skillsImages';

const Skills: React.FC = () => {
  const technologies = [
    {name: "TypeScript", image: skillsImages.ts},
    {name: "JavaScript", image: skillsImages.js},
    {name: "React", image: skillsImages.react},
    {name: "Node.js", image: skillsImages.nodejs},
    {name: "C#", image: skillsImages.c},
    {name: ".NET", image: skillsImages.net},
    {name: "Python", image: skillsImages.python},
    {name: "Scikit", image: skillsImages.scikit},
    {name: "Jupyter", image: skillsImages.jupyter},
    {name: "Lambdas", image: skillsImages.lambda},
    {name: "Axios", image: skillsImages.axios},
    {name: "GraphQL", image: skillsImages.gql},
    {name: "MS SQL", image: skillsImages.sqlServer},
    {name: "PG SQL", image: skillsImages.pg},
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
  
        <div className="mt-20">
          <h3 className="text-xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="basis-auto justify-items-center text-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 text-sm font-medium transition-transform"
              >
                <img
                  className="size-48px object-cover"
                  src={tech.image}
                  alt={`${tech.name} logo`}
                />
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;