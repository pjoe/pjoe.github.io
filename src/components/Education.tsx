import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, ExternalLink } from "lucide-react";
import resumeData from "../data/resumeData";

const Education = () => {
  return (
    <section className="py-20" id="education">
      <div className="section-container relative z-10">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Education & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-accent-primary flex items-center gap-2">
              <GraduationCap size={24} />
              Academic Background
            </h3>

            <div className="space-y-8">
              {resumeData.education.map((edu, index) => (
                <div
                  key={index}
                  className="card bg-background-light/30 backdrop-blur-sm border border-gray-800"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-text-primary">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center gap-1 text-accent-primary text-sm">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="text-lg text-accent-primary mb-2">
                    {edu.institution}
                  </div>
                  <div className="text-text-secondary mb-4">{edu.location}</div>

                  {edu.description && (
                    <p className="text-text-secondary">{edu.description}</p>
                  )}

                  {edu.achievements && (
                    <div className="mt-4">
                      <h5 className="font-medium text-text-primary mb-2">
                        Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-text-secondary flex items-start gap-2"
                          >
                            <span className="text-accent-primary">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-accent-primary flex items-center gap-2">
              <Award size={24} />
              Certifications & Training
            </h3>

            <div className="space-y-6">
              {resumeData.certifications &&
                resumeData.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="card bg-background-light/30 backdrop-blur-sm border border-gray-800"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(111, 207, 207, 0.2)",
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-text-primary">
                        {cert.title}
                      </h4>
                      {cert.date && (
                        <div className="text-accent-primary text-sm">
                          {cert.date}
                        </div>
                      )}
                    </div>

                    <div className="text-lg text-accent-primary mb-2">
                      {cert.issuer}
                    </div>

                    {cert.description && (
                      <p className="text-text-secondary mb-4">
                        {cert.description}
                      </p>
                    )}
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
