import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      const templateParams = {
        to_email: formData.email,
        from_name: formData.name,
        from_email: 'gabepineda6@gmail.com',
        subject: formData.subject,
        message: formData.message,
        reply_to: "gabepineda6@gmail.com"
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'gabepineda6@gmail.com',
      link: 'mailto:gabepineda6@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (510) 372-6925',
      link: 'tel:+15103726925'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'San Francisco, CA',
      link: null
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/gabriel-omar-pineda',
      link: 'https://linkedin.com/in/gabriel-omar-pineda'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/gabrielpineda808',
      link: 'https://github.com/gabrielpineda808'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Let's Connect
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Whether you have a question about my work, want to discuss a potential collaboration, 
                or just want to say hello, I'd love to hear from you. Feel free to reach out through 
                any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{info.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-accent hover:text-accent-hover transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-text-secondary">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>


          </div>

          {/* Contact Form */}
          <div className="bg-dark-card border border-dark-border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-text-secondary text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="contact-input w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="contact-input w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-text-secondary text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="contact-input w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="contact-input w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                  ✅ Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                  ❌ Something went wrong. Please try again or contact me directly via email.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-hover disabled:bg-accent/50 text-dark-bg font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
