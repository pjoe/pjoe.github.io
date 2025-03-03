import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
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
              Currently {resumeData.availability.status}
              {resumeData.availability.looking ? 
                " and open to new opportunities." : 
                " and focused on my current role."}
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-text-primary">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                {resumeData.skills
                  .filter(skill => skill.category === "language")
                  .sort((a, b) => b.level - a.level)
                  .map((language, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-accent-primary font-medium">{language.name}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 rounded-full ${i < language.level ? 'bg-accent-primary' : 'bg-background-light'}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
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

              {resumeData.contact.linkedin && (
                <div className="flex items-start gap-4">
                  <div className="bg-background-light p-3 rounded-md">
                    <Linkedin size={20} className="text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-text-primary">LinkedIn</h4>
                    <a 
                      href={resumeData.contact.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent-primary transition-colors"
                    >
                      {resumeData.contact.linkedin.replace('https://', '')}
                    </a>
                  </div>
                </div>
              )}

              {resumeData.contact.github && (
                <div className="flex items-start gap-4">
                  <div className="bg-background-light p-3 rounded-md">
                    <Github size={20} className="text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-text-primary">GitHub</h4>
                    <a 
                      href={resumeData.contact.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent-primary transition-colors"
                    >
                      {resumeData.contact.github.replace('https://', '')}
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-text-primary">My Approach</h3>
              <ul className="space-y-2 text-text-secondary">
                {resumeData.skills
                  .filter(skill => skill.category === "soft" && skill.level >= 4)
                  .sort((a, b) => b.level - a.level)
                  .slice(0, 5)
                  .map((skill, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent-primary">•</span>
                      <span>{skill.name}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
