import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import resumeData from '../data/resumeData';

const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-text-primary">Who I Am</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              {resumeData.bio}
            </p>
            <p className="text-text-secondary mb-6 leading-relaxed">
              I'm passionate about creating clean, efficient, and accessible web applications that provide exceptional user experiences. With a strong foundation in frontend technologies and a keen eye for design, I strive to bridge the gap between functionality and aesthetics.
            </p>
            <p className="text-text-secondary leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-text-primary">Personal Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-background-light p-3 rounded-md">
                  <Phone size={20} className="text-accent-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-primary">Phone</h4>
                  <p className="text-text-secondary">{resumeData.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-background-light p-3 rounded-md">
                  <Mail size={20} className="text-accent-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-primary">Email</h4>
                  <p className="text-text-secondary">{resumeData.contact.email}</p>
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
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-text-primary">My Approach</h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary">•</span>
                  <span>User-centered design and development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary">•</span>
                  <span>Clean, maintainable, and well-documented code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary">•</span>
                  <span>Performance optimization and accessibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary">•</span>
                  <span>Continuous learning and adaptation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary">•</span>
                  <span>Collaborative problem-solving</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
