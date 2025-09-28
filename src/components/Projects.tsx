import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'BookMe',
      description: 'BookMe is a comprehensive booking platform (in developemnt) that allows users to schedule appointments with various service providers seamlessly.',
      image: '📘',
      technologies: ['React', 'Springboot', 'Postgres',],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: 'https://github.com/GabrielPineda808/BookMe',
      featured: true
    },
    {
      id: 2,
      title: 'Contact App',
      description: 'Contact App is a full-stack application that allows users to manage their contacts efficiently with features like adding, editing, and deleting contacts.',
      image: '🛒',
      technologies: ['React', 'Springboot', 'Postgres'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: 'https://github.com/GabrielPineda808/ContactApp',
      featured: true
    }
    
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'backend', label: 'Backend' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-dark-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto px-4">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                activeFilter === filter.key
                  ? 'bg-accent text-dark-bg shadow-lg'
                  : 'bg-dark-card border border-dark-border text-text-secondary hover:border-accent hover:text-accent'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
            <span className="gradient-text">Featured</span> Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="project-card bg-dark-card border border-dark-border rounded-2xl overflow-hidden group">
                {/* Project Image */}
                <div className="relative h-48 sm:h-64 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl sm:text-8xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-dark-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                      <a href={project.liveUrl} className="bg-accent text-dark-bg px-4 py-2 rounded-lg hover:bg-accent-hover transition-colors text-center">
                        Live Demo
                      </a>
                      <a href={project.githubUrl} className="border border-accent text-accent px-4 py-2 rounded-lg hover:bg-accent hover:text-dark-bg transition-colors text-center">
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-text-primary mb-3">{project.title}</h4>
                  <p className="text-text-secondary mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 sm:px-3 py-1 bg-accent/10 text-accent rounded-full text-xs sm:text-sm border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.filter(p => !p.featured).map((project) => (
            <div key={project.id} className="project-card bg-dark-card border border-dark-border rounded-xl overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
                <div className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    <a href={project.liveUrl} className="bg-accent text-dark-bg px-3 py-1 rounded text-sm hover:bg-accent-hover transition-colors text-center">
                      Demo
                    </a>
                    <a href={project.githubUrl} className="border border-accent text-accent px-3 py-1 rounded text-sm hover:bg-accent hover:text-dark-bg transition-colors text-center">
                      Code
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-3 sm:p-4">
                <h4 className="text-base sm:text-lg font-semibold text-text-primary mb-2">{project.title}</h4>
                <p className="text-text-secondary text-xs sm:text-sm mb-3 leading-relaxed line-clamp-3">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-accent/10 text-accent rounded text-xs border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-dark-border text-text-muted rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 px-4">
          <p className="text-text-secondary mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-hover text-dark-bg font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>Start a Project</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
