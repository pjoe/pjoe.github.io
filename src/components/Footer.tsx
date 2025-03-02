import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import resumeData from '../data/resumeData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-dark border-t border-gray-800 py-12 relative">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <motion.div 
              className="text-2xl font-bold text-text-primary mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#home" className="flex items-center gap-2">
                <span className="text-accent-primary">JD</span>
                <span>John Doe</span>
              </a>
            </motion.div>
            
            <p className="text-text-secondary mb-6">
              A passionate {resumeData.title} focused on creating clean, user-friendly experiences.
            </p>
            
            <div className="flex gap-4">
              {resumeData.contact.github && (
                <motion.a 
                  href={resumeData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background-light rounded-full text-text-secondary hover:text-accent-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </motion.a>
              )}
              
              {resumeData.contact.linkedin && (
                <motion.a 
                  href={resumeData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background-light rounded-full text-text-secondary hover:text-accent-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </motion.a>
              )}
              
              <motion.a 
                href={`mailto:${resumeData.contact.email}`}
                className="p-2 bg-background-light rounded-full text-text-secondary hover:text-accent-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email Me"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-text-secondary hover:text-accent-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-text-secondary hover:text-accent-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-text-secondary hover:text-accent-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#experience" className="text-text-secondary hover:text-accent-primary transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="text-text-secondary hover:text-accent-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-text-secondary hover:text-accent-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-text-secondary">
                <span className="text-accent-primary">Email:</span> {resumeData.contact.email}
              </li>
              <li className="text-text-secondary">
                <span className="text-accent-primary">Phone:</span> {resumeData.contact.phone}
              </li>
              <li className="text-text-secondary">
                <span className="text-accent-primary">Location:</span> {resumeData.contact.location}
              </li>
              <li className="text-text-secondary">
                <span className="text-accent-primary">Availability:</span> {resumeData.availability.status}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-text-secondary text-sm mb-4 md:mb-0">
            © {currentYear} {resumeData.name}. All rights reserved.
          </div>
          
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-background-light rounded-full text-text-secondary hover:text-accent-primary transition-colors"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
