import React from 'react';
import { Github } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';
import azulImg from '../assets/azul.png';
import azulBotImg from '../assets/azul-bot.png';

const Projects: React.FC = () => {
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Azul',
      description: 'An exercise in using AI as a code development tool. Created in an afternoon using GitHub Copilot.',
      image: azulImg,
      tags: ['React', 'TypeScript', 'AI', 'Copilot'],
      liveUrl: 'https://chillingo117.github.io/azul-vibe/',
      githubUrl: 'https://github.com/chillingo117/azul-vibe'
    },
    {
      id: 1,
      title: 'Azul-Bot',
      description: 'A C# backend using a Lambda that runs MCTS. Provides an AI player bot service to the Azul project.',
      image: azulBotImg,
      tags: ['C#', 'Lambda', 'AWS (in progress)', '.NET 9', 'ML', 'MCTS'],
      liveUrl: 'https://chillingo117.github.io/azul-vibe/',
      githubUrl: 'https://github.com/chillingo117/azul-vibe'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work across different technologies and domains. 
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto opacity-50">
            (in-development)
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/chillingo117" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all shadow-md hover:shadow-lg"
          >
            <Github size={20} className="mr-2" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;