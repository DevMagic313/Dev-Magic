import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-deep-blue/90 backdrop-blur-sm' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl font-montserrat font-bold text-neon-cyan"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neon-cyan p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <motion.a
                key={item.name}
                href={item.href}
                className="font-poppins hover:text-neon-cyan transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isMobileMenuOpen ? 'flex' : 'hidden'
            } md:hidden absolute top-full left-0 right-0 flex-col items-center bg-deep-blue/95 backdrop-blur-sm py-4 space-y-4`}
          >
            {navItems.map(item => (
              <motion.a
                key={item.name}
                href={item.href}
                className="font-poppins hover:text-neon-cyan transition-colors duration-300 w-full text-center py-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeMobileMenu}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="flex items-center space-x-4 py-2">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;