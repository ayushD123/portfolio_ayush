import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "APIs Built", value: "50+" },
    { label: "Daily Data Processing", value: "250GB" },
    { label: "AI Prediction Accuracy", value: "85%" },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-portfolio-bg-primary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-secondary">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-portfolio-secondary mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-portfolio-neutral mb-6 leading-relaxed">
              Hello! I'm Ayush, a passionate software engineer with a love for creating innovative solutions. 
              My journey in tech started during my Computer Science studies at RNSIT Bangalore, where I graduated with a 9.36 CGPA.
            </p>
            <p className="text-lg text-portfolio-neutral mb-6 leading-relaxed">
              Currently, I'm working as an Associate Engineer at Oracle, where I develop AI-powered solutions for supply chain management. 
              I've engineered systems that analyze thousands of purchase orders in real-time and built scalable ETL pipelines processing over 250 GB of data daily.
            </p>
            <p className="text-lg text-portfolio-neutral mb-6 leading-relaxed">
              I'm also a <span className="text-portfolio-secondary">Knight at LeetCode</span> (Top 5% coder worldwide) and have been a core member of the 
              Google Developers Club. I love tackling complex problems and building solutions that make a real impact.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glassmorphism p-4 rounded-lg text-center"
                >
                  <h3 className="text-2xl font-bold text-portfolio-secondary">{stat.value}</h3>
                  <p className="text-portfolio-neutral text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-portfolio-secondary/20 to-portfolio-accent/20 rounded-2xl blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Professional developer workspace"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
