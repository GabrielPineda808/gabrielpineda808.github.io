import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl font-semibold text-text-primary">
              Passionate Developer with a Creative Edge
            </h3>
            
            <p className="text-text-secondary leading-relaxed">
              I'm a full-stack developer who loves turning complex problems into simple, beautiful, and intuitive solutions. 
              With a background in both design and development, I bring a unique perspective to every project.
            </p>
            
            <p className="text-text-secondary leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in writing clean, maintainable code 
              and creating user experiences that people love.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-text-secondary">1 Year of Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-text-secondary">20+ Projects Completed</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-text-secondary">Full Stack Expertise</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-text-secondary">Problem Solver</span>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="pt-6">
              <a 
                href="/GabrielPinedaResume_SWE.pdf" 
                download="GabrielPinedaResume_SWE.pdf"
                className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-hover text-dark-bg font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Main Image Placeholder */}
            <div className="relative z-10">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center border border-accent/30">
                <div className="text-center">
                  <img src='https://i.imgur.com/t0rTPWR.jpeg' alt="Profile" className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-accent/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-32 sm:h-32 bg-accent/5 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Tech Stack Icons - Hidden on mobile */}
            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 hidden lg:block">
              <div className="bg-dark-card border border-dark-border rounded-lg p-3 shadow-lg">
                <div className="text-2xl">⚛️</div>
              </div>
            </div>
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 hidden lg:block">
              <div className="bg-dark-card border border-dark-border rounded-lg p-3 shadow-lg">
                <div className="text-2xl">🚀</div>
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
              <div className="bg-dark-card border border-dark-border rounded-lg p-3 shadow-lg">
                <div className="text-2xl">💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
