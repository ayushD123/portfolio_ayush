import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Wrench, Cloud } from "lucide-react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C/C++", level: 75 },
      ],
    },
    {
      icon: Wrench,
      title: "Frameworks & Tools",
      skills: [
        { name: "React/Next.js", level: 85 },
        { name: "Django", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Git", level: 85 },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Databases",
      skills: [
        { name: "Oracle Cloud", level: 90 },
        { name: "AWS", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Redis/Kafka", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-portfolio-primary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-secondary">02.</span> Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-portfolio-secondary mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="glassmorphism p-6 rounded-xl"
              >
                <div className="text-center mb-6">
                  <IconComponent className="w-12 h-12 text-portfolio-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-portfolio-text-primary">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      className="skill-item"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-portfolio-neutral">{skill.name}</span>
                        <span className="text-portfolio-secondary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut",
                          }}
                          className="skill-bar h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
