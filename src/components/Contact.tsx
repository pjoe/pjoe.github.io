import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import resumeData from '../data/resumeData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
  };
  
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
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-text-primary">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-secondary mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-light border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary/50 text-text-primary"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-text-secondary mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-light border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary/50 text-text-primary"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-text-secondary mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-light border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary/50 text-text-primary"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-text-secondary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background-light border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary/50 text-text-primary resize-none"
                  placeholder="Hello, I'd like to discuss a project..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
