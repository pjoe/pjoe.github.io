import { motion } from "framer-motion";
import resumeData, { Skill } from "../data/resumeData";

const Skills = () => {
  // Group skills by category
  const skillsByCategory = resumeData.skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent-primary/5 rounded-full filter blur-[80px]"></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mx-auto">Technical Skills</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            in various technologies and tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <motion.div
              key={category}
              className="card bg-background-light/30 backdrop-blur-sm border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(111, 207, 207, 0.2)",
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-accent-primary">
                {category}
              </h3>

              <motion.div
                className="flex flex-wrap gap-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="bg-background-dark/60 px-4 py-2 rounded-full flex items-center gap-2"
                    variants={item}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(111, 207, 207, 0.1)",
                    }}
                  >
                    {skill.icon && (
                      <span className="text-accent-primary">{skill.icon}</span>
                    )}
                    <span>{skill.name}</span>
                    {skill.level && (
                      <div className="ml-2 w-16 h-1.5 bg-background-light rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-accent-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level * 20}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills visualization */}
        <motion.div
          className="mt-16 p-8 rounded-xl bg-background-light/30 backdrop-blur-sm border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-6 text-center">
            Proficiency Overview
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.skills.slice(0, 6).map((skill) => (
              <motion.div
                key={skill.name}
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-accent-primary">{skill.level * 20}%</span>
                </div>
                <div className="h-2 w-full bg-background-dark rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent-primary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level * 20}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
