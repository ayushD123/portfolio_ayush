import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Real-Time Delivery Tracking",
      description: "A comprehensive delivery tracking application inspired by Zomato, built with Django and Kafka for seamless real-time data streaming.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      technologies: ["Django", "Kafka", "Python", "WebSocket"],
      githubUrl: "https://github.com/ayushdixit244",
      liveUrl: "#",
    },
    {
      title: "Driver Drowsiness Detection",
      description: "An AI-powered system built with Python Flask to detect drowsy driving and mitigate road accidents through real-time monitoring.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      technologies: ["Python", "Flask", "OpenCV", "AI/ML"],
      githubUrl: "https://github.com/ayushdixit244",
      liveUrl: "#",
    },
    {
      title: "Task Management System",
      description: "A responsive task management app built with Next.js 14 and TypeScript, featuring real-time updates and smooth animations.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      githubUrl: "https://github.com/ayushdixit244",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-portfolio-bg-primary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-secondary">03.</span> Featured Projects
          </h2>
          <div className="w-24 h-1 bg-portfolio-secondary mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="project-card p-6 rounded-xl group"
            >
              <div className="mb-6">
                <div className="overflow-hidden rounded-lg mb-4">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-portfolio-text-primary mb-2 group-hover:text-portfolio-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-portfolio-neutral mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-portfolio-secondary/20 text-portfolio-secondary rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-secondary hover:text-portfolio-accent transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-secondary hover:text-portfolio-accent transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/ayushdixit244"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border-2 border-portfolio-secondary text-portfolio-secondary px-8 py-3 rounded-lg font-medium hover:bg-portfolio-secondary hover:text-portfolio-primary transition-all duration-300"
          >
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
