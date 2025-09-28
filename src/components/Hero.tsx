import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-text-primary">Hi, I'm </span>
            <span className="gradient-text">Gabriel Pineda</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-text-secondary mb-8 font-light">
            Full Stack Developer & Creative Problem Solver
          </h2>
          
          <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft digital experiences that combine cutting-edge technology with intuitive design. 
            From concept to deployment, I bring ideas to life through clean code and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary bg-accent hover:bg-accent-hover text-dark-bg font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-dark-bg font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
              <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <div className="text-accent/20 text-6xl animate-float">⚛️</div>
      </div>
      <div className="absolute bottom-40 left-20 hidden lg:block">
        <div className="text-accent/20 text-5xl animate-float" style={{ animationDelay: '3s' }}>🚀</div>
      </div>
      <div className="absolute top-1/3 left-10 hidden lg:block">
        <div className="text-accent/20 text-4xl animate-float" style={{ animationDelay: '1s' }}>💻</div>
      </div>
    </section>
  );
};

export default Hero;
