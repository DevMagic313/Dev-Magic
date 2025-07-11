import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectimages1 from '../img/resturant.jpg';
import projectimages2 from '../img/recipe finder.jpg';
import projectimages3 from '../img/data tech.jpg';



const projects = [
 {
  title:'Restaurant Website',
  description: 'A futuristic restaurant website built with HTML5, CSS3, and JavaScript.',
  image: projectimages1,
  technologies: ['HTML5', 'CSS3', 'JavaScript'],
  github: 'https://github.com/DevMagic313/Resturant-website',
  live: 'https://devmagic-the-cozy-corner.netlify.app/',
},
  {
    title: 'Qalb Giving Platform',
    description: 'A Sharia-compliant donation platform.',
    image: projectimages2,
    technologies: ['TypeScript', 'CSS3', 'HTML', 'Others'],
    github: 'https://github.com/DevMagic313/qalb-giving-platform',
    live: 'https://qalbandzakat.netlify.app/'
  },
{
  title: 'DollarKeeper',
  description: 'Learn effective trading techniques explained in simple English.',
  image: projectimages3,
  technologies: ['React. JS', 'HTML', 'CSS', 'Typescript'],
  github: 'https://github.com/DevMagic313/dollar-keeper-frontend-ui',
  live: 'https://dollarkeeper.netlify.app/',
}
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-lg overflow-hidden border-2 border-neon-cyan hover:border-neon-magenta transition-colors"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/90 to-transparent p-6 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-poppins font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-full border border-neon-cyan">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-neon-cyan hover:bg-neon-cyan/10 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-neon-magenta hover:bg-neon-magenta/10 transition-colors"
                  >
                    <FaExternalLinkAlt className ="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
