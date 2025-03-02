import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import resumeData from '../data/resumeData';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-3 py-1 text-sm font-medium bg-accent-primary/10 text-accent-primary rounded-full mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {resumeData.title}
            </motion.span>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 glow-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Hi, I'm{' '}
              <span className="text-accent-primary">
                {resumeData.name.split(' ')[0]}
              </span>
              <br />
              {resumeData.headline}
            </motion.h1>
            
            <motion.p 
              className="text-text-secondary text-lg mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {resumeData.summary}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.a 
                href="#contact" 
                className="btn btn-primary flex items-center gap-2 glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch <ArrowRight size={16} />
              </motion.a>
              
              <motion.a 
                href="/resume.pdf" 
                className="btn btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                Download CV <Download size={16} />
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
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
                  <Github size={20} />
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
                  <Linkedin size={20} />
                </motion.a>
              )}
              
              <motion.a 
                href={`mailto:${resumeData.contact.email}`}
                className="p-2 bg-background-light rounded-full text-text-secondary hover:text-accent-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email Me"
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 rounded-full bg-accent-primary/10 animate-pulse"></div>
              <img 
                src={resumeData.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"} 
                alt={resumeData.name} 
                className="absolute inset-4 object-cover rounded-full border-4 border-background-dark glow"
              />
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-background-light p-3 rounded-lg shadow-lg glow"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="text-accent-primary font-bold text-xl">5+</div>
                <div className="text-text-secondary text-xs">Years Exp.</div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-background-light p-3 rounded-lg shadow-lg glow"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-accent-primary font-bold text-xl">50+</div>
                <div className="text-text-secondary text-xs">Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-accent-primary rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
