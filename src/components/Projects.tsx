import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import resumeData from "../data/resumeData";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Extract unique categories from projects
  const categories = [
    "All",
    ...new Set(resumeData.projects.map((project) => project.category)),
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeFilter === "All"
      ? resumeData.projects
      : resumeData.projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 w-full h-full bg-black/20 z-[-1]"></div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-accent-primary/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/2 left-1/4 w-64 h-64 bg-accent-primary/5 rounded-full filter blur-[80px]"></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mx-auto">Featured Projects</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A showcase of my recent work, personal projects, and contributions
            to open-source.
          </p>
        </motion.div>

        {/* Project filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-accent-primary text-background-dark"
                  : "bg-background-light/50 text-text-secondary hover:text-text-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="card bg-background-light/30 backdrop-blur-sm border border-gray-800 flex flex-col h-full group"
                whileHover={{
                  y: -10,
                  boxShadow: "0 15px 30px -10px rgba(111, 207, 207, 0.2)",
                }}
              >
                {project.image && (
                  <div className="relative mb-4 overflow-hidden rounded-md aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                      <span className="text-xs font-medium bg-accent-primary/20 text-accent-primary px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2 group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-text-secondary mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-background-dark/60 text-text-secondary px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-800">
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent-primary transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="GitHub Repository"
                      >
                        <Github size={18} />
                      </motion.a>
                    )}

                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent-primary transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>

                  <motion.a
                    href={project.link || project.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project <ArrowRight size={14} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View more projects button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href={resumeData.contact.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Projects <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
