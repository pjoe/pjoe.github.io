import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import resumeData from "../data/resumeData";

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 w-full h-full bg-black/30 z-[-1]"></div>

      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 transform md:translate-x-[-0.5px]"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="relative">
                <motion.div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 bg-accent-primary rounded-full transform -translate-x-[10px] md:-translate-x-[12px] z-10 shadow-lg shadow-accent-primary/20"></div>

                  {/* Date */}
                  <div
                    className={`md:w-1/2 pb-8 md:pb-0 ${
                      index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                    }`}
                  >
                    <div className="flex items-center md:justify-start gap-2 text-accent-primary mb-2">
                      <Calendar size={16} />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="text-text-secondary">{exp.location}</div>
                  </div>

                  {/* Content */}
                  <div
                    className={`md:w-1/2 pl-8 md:pl-0 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="card bg-background-light border border-gray-800">
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={18} className="text-accent-primary" />
                        <h3 className="text-xl font-bold text-text-primary">
                          {exp.title}
                        </h3>
                      </div>
                      <div className="text-lg font-medium text-accent-primary mb-4">
                        {exp.company}
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-text-secondary flex items-start gap-2"
                          >
                            <span className="text-accent-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-background-dark text-text-secondary text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
