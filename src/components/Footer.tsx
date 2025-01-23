import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-neon-cyan/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-poppins font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-neon-cyan transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-neon-cyan transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-neon-cyan transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-neon-cyan transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-poppins font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/DevMagic313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neon-cyan transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.tiktok.com/@devmagic313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neon-cyan transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/devmagic313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neon-cyan transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
  <h4 className="text-xl font-poppins font-semibold mb-4">Newsletter</h4>
  <p className="mb-4">Subscribe to my newsletter for updates and tips.</p>
  <form className="flex flex-col md:flex-row gap-2">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full md:flex-1 px-4 py-2 rounded-lg border-2 border-neon-cyan bg-transparent focus:border-neon-magenta outline-none transition-colors"
    />
    <motion.button
      type="submit"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full md:w-auto px-4 py-2 rounded-lg border-2 border-neon-magenta hover:bg-neon-magenta/10 transition-colors"
    >
      Subscribe
    </motion.button>
  </form>
</div>
        </div>
        <div className="mt-8 pt-8 border-t border-neon-cyan/20 text-center">
          <p className="flex items-center justify-center gap-2">
            Made with <FaHeart className="text-neon-magenta" /> by DevMagic © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
