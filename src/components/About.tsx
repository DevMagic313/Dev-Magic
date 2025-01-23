import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCode, FaPalette, FaGitAlt, FaLaptopCode, FaUserGraduate, FaCoffee } from 'react-icons/fa';
import { useRef } from 'react';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-16 md:py-20 overflow-hidden" ref={containerRef}>
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        style={{ opacity, scale }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-center mb-8 md:mb-12 animate-text-shimmer"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div 
              variants={cardVariants}
              className="bg-[var(--bg-secondary)] rounded-lg p-6 backdrop-blur-sm border-2 border-[var(--color-secondary)] animate-cyber-glow"
            >
              <h3 className="text-xl md:text-2xl font-poppins font-semibold mb-4 text-[var(--color-secondary)]">
                My Journey
              </h3>
              <p className="text-base md:text-lg mb-4 font-poppins leading-relaxed">
                I'm a passionate Frontend Developer with a keen eye for creating beautiful and functional web experiences.
              </p>
              <p className="text-base md:text-lg font-poppins leading-relaxed">
                I specialize in building responsive, performant web applications using modern technologies and best practices.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[
                { icon: FaLaptopCode, text: "Coding", color: "cyan" },
                { icon: FaUserGraduate, text: "Learning", color: "magenta" },
                { icon: FaCoffee, text: "Coffee", color: "purple" }
              ].map((item, index) => (
                <motion.div 
                  key={item.text}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  className={`p-4 rounded-lg border-2 border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 
                           transition-all duration-300 animate-float`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <item.icon className="text-2xl md:text-3xl text-[var(--color-secondary)] mb-2" />
                  <p className="text-sm md:text-base font-poppins">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {[
              { icon: FaCode, title: "Development", desc: "Building responsive web applications" },
              { icon: FaPalette, title: "Design", desc: "Creating intuitive user interfaces" },
              { icon: FaGitAlt, title: "Version Control", desc: "Managing code with Git" }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-lg border-2 border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 
                         transition-all duration-300 animate-cyber-glow"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <item.icon className="text-3xl md:text-4xl text-[var(--color-secondary)] mb-4" />
                <h3 className="text-lg md:text-xl font-poppins font-semibold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;