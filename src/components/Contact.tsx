import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import resumeData from '../data/resumeData';

const Contact = () => {  
  return (
    <section id="contact" className="py-20 bg-background-dark relative">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-primary/5 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mx-auto">Get In Touch</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-text-primary">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-background-light p-3 rounded-md">
                  <Mail size={20} className="text-accent-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-primary">Email</h4>
                  <a 
                    href={`mailto:${resumeData.contact.email}`} 
                    className="text-text-secondary hover:text-accent-primary transition-colors"
                  >
                    {resumeData.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-background-light p-3 rounded-md">
                  <Phone size={20} className="text-accent-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-primary">Phone</h4>
                  <a 
                    href={`tel:${resumeData.contact.phone}`} 
                    className="text-text-secondary hover:text-accent-primary transition-colors"
                  >
                    {resumeData.contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-background-light p-3 rounded-md">
                  <MapPin size={20} className="text-accent-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-primary">Location</h4>
                  <p className="text-text-secondary">{resumeData.contact.location}</p>
                </div>
              </div>
            </div>
            
          </motion.div>
          
          {/* Connect With Me */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >            
            <h3 className="text-2xl font-bold mb-4 text-text-primary">Connect With Me</h3>
            <div className="flex gap-4 mb-8">
              {resumeData.contact.github && (
                <motion.a 
                  href={resumeData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background-light p-3 rounded-md text-text-secondary hover:text-accent-primary transition-colors"
                  whileHover={{ y: -5, boxShadow: '0 5px 15px -5px rgba(111, 207, 207, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </motion.a>
              )}
              
              {resumeData.contact.linkedin && (
                <motion.a 
                  href={resumeData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background-light p-3 rounded-md text-text-secondary hover:text-accent-primary transition-colors"
                  whileHover={{ y: -5, boxShadow: '0 5px 15px -5px rgba(111, 207, 207, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </motion.a>
              )}
              
              {resumeData.contact.website && (
                <motion.a 
                  href={resumeData.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background-light p-3 rounded-md text-text-secondary hover:text-accent-primary transition-colors"
                  whileHover={{ y: -5, boxShadow: '0 5px 15px -5px rgba(111, 207, 207, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Personal Website"
                >
                  <ExternalLink size={24} />
                </motion.a>
              )}
            </div>
            
            <div className="card bg-background-light/30 backdrop-blur-sm border border-gray-800">
              <h3 className="text-xl font-bold mb-2 text-text-primary">Availability</h3>
              <p className="text-text-secondary mb-4">
                I'm currently {resumeData.availability.status} and {resumeData.availability.looking ? 'open to new opportunities' : 'not actively looking for new roles'}.
              </p>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${resumeData.availability.looking ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                <span className="text-sm text-text-secondary">
                  {resumeData.availability.looking ? 'Available for hire' : 'Limited availability'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
