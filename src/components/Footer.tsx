import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-card border-t border-dark-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Gabriel Pineda</h3>
            <p className="text-text-secondary max-w-xs">
              Full-stack developer passionate about creating innovative digital solutions and building the future of the web.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-text-secondary">
                <span className="text-accent">📧</span> gabriel.pineda@example.com
              </p>
              <p className="text-text-secondary">
                <span className="text-accent">📍</span> San Francisco, CA
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {[
                { icon: '🐙', label: 'GitHub', url: 'https://github.com/gabrielpineda808' },
                { icon: '📘', label: 'LinkedIn', url: 'https://linkedin.com/in/gabriel-omar-pineda/' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-bg border border-dark-border rounded-lg flex items-center justify-center text-lg hover:border-accent hover:text-accent transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-text-secondary text-sm">
              © {currentYear} Gabriel Pineda. All rights reserved.
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-accent hover:text-accent-hover transition-colors duration-200 group"
            >
              <span className="text-sm">Back to Top</span>
              <svg 
                className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Made with Love */}
        <div className="text-center pt-6">
          <p className="text-text-muted text-sm">
            Made with <span className="text-red-400">❤️</span> using React, TypeScript & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
