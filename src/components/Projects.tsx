import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and secure checkout.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      liveUrl: 'https://example.com/ecommerce',
      githubUrl: 'https://github.com/yourusername/ecommerce'
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description: 'A beautiful and intuitive task management system with drag-and-drop functionality and team collaboration features.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['React', 'TypeScript', 'Firebase', 'Material UI'],
      category: 'frontend',
      liveUrl: 'https://example.com/task-dashboard',
      githubUrl: 'https://github.com/yourusername/task-dashboard'
    },
    {
      id: 3,
      title: 'AI-Powered Content Generator',
      description: 'A tool that leverages AI to automatically generate content for blogs, social media, and more.',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['Python', 'TensorFlow', 'Flask', 'React'],
      category: 'backend',
      liveUrl: 'https://example.com/ai-content',
      githubUrl: 'https://github.com/yourusername/ai-content-generator'
    },
    {
      id: 4,
      title: 'Mobile Fitness App',
      description: 'A cross-platform mobile application for tracking workouts, nutrition, and fitness goals.',
      image: 'https://images.pexels.com/photos/3912606/pexels-photo-3912606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['React Native', 'Redux', 'Firebase', 'Expo'],
      category: 'mobile',
      liveUrl: 'https://example.com/fitness-app',
      githubUrl: 'https://github.com/yourusername/fitness-app'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my skills and projects.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      liveUrl: 'https://example.com/portfolio',
      githubUrl: 'https://github.com/yourusername/portfolio'
    },
    {
      id: 6,
      title: 'RESTful API Service',
      description: 'A high-performance RESTful API built to support various client applications.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['Node.js', 'Express', 'MongoDB', 'Docker'],
      category: 'backend',
      liveUrl: 'https://example.com/api',
      githubUrl: 'https://github.com/yourusername/api-service'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
    
  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'mobile', label: 'Mobile' }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work across different technologies and domains.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category.value
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/yourusername" 
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