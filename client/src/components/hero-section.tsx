import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "I build things for fun.";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen hero-bg flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/20 to-portfolio-secondary/10"></div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-portfolio-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-portfolio-accent/10 rounded-full blur-3xl"
        />
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-portfolio-secondary text-lg mb-4 font-mono"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-portfolio-text-primary"
          >
            Ayush Dixit
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-portfolio-neutral min-h-[4rem] flex items-center justify-center"
          >
            <span className="typing-cursor">{displayText}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-portfolio-neutral mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I'm a software engineer specializing in building exceptional digital
            experiences. Currently working at Oracle, creating AI-powered
            solutions for supply chain management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/ayushD123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-text-primary hover:text-portfolio-secondary text-2xl transition-colors"
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/ayush-dixit-302705203/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-text-primary hover:text-portfolio-secondary text-2xl transition-colors"
            >
              <Linkedin size={32} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href="https://leetcode.com/u/dungeon_master543/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-text-primary hover:text-portfolio-secondary text-2xl transition-colors"
            >
              <Code size={32} />
            </motion.a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="inline-block bg-transparent border-2 border-portfolio-secondary text-portfolio-secondary px-8 py-3 rounded-lg font-medium hover:bg-portfolio-secondary hover:text-portfolio-primary transition-all duration-300"
          >
            Get to know me
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 ml-[0px] mr-[0px] mt-[29px] mb-[29px]"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-portfolio-secondary cursor-pointer"
            onClick={scrollToAbout}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
