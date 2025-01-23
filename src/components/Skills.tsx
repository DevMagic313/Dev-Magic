import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiAdobephotoshop } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: FaHtml5, progress: 90 },
      { name: 'CSS3', icon: FaCss3Alt, progress: 85 },
      { name: 'JavaScript', icon: FaJs, progress: 80 },
      { name: 'TypeScript', icon: SiTypescript, progress: 62 },
      { name: 'React', icon: FaReact, progress: 70 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, progress: 78 }
    ]
  },
  {
    title: 'Design Tools',
    skills: [
      { name: 'Figma', icon: FaFigma, progress: 65 },
      { name: 'Photoshop', icon: SiAdobephotoshop, progress: 50 }
    ]
  },
  {
  title: 'Version Control',
  skills: [
    { name: 'Git', icon: FaGitAlt, progress: 65, description: 'Version control system' },
    { name: 'GitHub', icon: FaGithub, progress: 95, description: 'Web-based platform for version control and collaboration' }
  ]
}
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="p-6 rounded-lg border-2 border-neon-cyan hover:border-neon-magenta transition-colors"
            >
              <h3 className="text-2xl font-poppins font-semibold mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className="flex items-center mb-2">
                      <skill.icon className="text-2xl text-neon-cyan mr-2" />
                      <span className="font-poppins">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-deep-blue/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;