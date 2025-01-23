import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaBriefcase, FaCertificate } from 'react-icons/fa';

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent"
        >
          Resume
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 mb-12 px-6 py-3 rounded-lg border-2 border-neon-cyan hover:bg-neon-cyan/10 transition-colors w-fit mx-auto"
          >
            <FaDownload className="text-neon-cyan" />
            <span className="font-poppins">Download Resume</span>
          </motion.a>
          
          <div className="space-y-12">
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <FaGraduationCap className="text-3xl text-neon-cyan" />
                <h3 className="text-2xl font-poppins font-semibold">Education</h3>
              </div>
              <div className="border-l-2 border-neon-cyan pl-6 space-y-6">
                <div>
                  <h4 className="text-xl font-poppins font-semibold">Bachelor of Computer Science</h4>
                  <p className="text-neon-cyan">VU of Pakistan • 2024-2028</p>
                  <p className="mt-2">Relevant coursework in web development, algorithms, and software engineering.</p>
                </div>
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <FaBriefcase className="text-3xl text-neon-magenta" />
                <h3 className="text-2xl font-poppins font-semibold">Experience</h3>
              </div>
              <div className="border-l-2 border-neon-magenta pl-6 space-y-6">
                <div>
                  <h4 className="text-xl font-poppins font-semibold">Frontend Developer</h4>
                  <p className="text-neon-magenta">Fresher • 2024-Present</p>
                  <ul className="mt-2 list-disc list-inside space-y-2">
                    <li>Developed responsive web applications using React and TypeScript</li>
                    <li>Implemented modern UI/UX designs using Tailwind CSS</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <FaCertificate className="text-3xl text-neon-purple" />
                <h3 className="text-2xl font-poppins font-semibold">Certifications</h3>
              </div>
              <div className="border-l-2 border-neon-purple pl-6 space-y-6">
                <div>
                  <h4 className="text-xl font-poppins font-semibold">JavaScript Developer Certification</h4>
                  <p className="text-neon-purple">Hacker Rank • 2024</p>
                </div>
                <div>
                  <h4 className="text-xl font-poppins font-semibold">Python Developer Certification</h4>
                  <p className="text-neon-purple">Hacker Rank • 2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
