import { useEffect } from 'react';
import { useThemeStore } from '../store/themeStore';
import { FaSun, FaMoon, FaMars, FaVenus } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDarkMode, themeStyle, toggleTheme, setThemeStyle } = useThemeStore();

  useEffect(() => {
    const updateTheme = () => {
      document.documentElement.classList.toggle('dark', isDarkMode);
      document.documentElement.classList.toggle('light', !isDarkMode);
      document.documentElement.setAttribute('data-theme', themeStyle);
    };

    updateTheme();
    
    // Add transition class when theme changes
    const html = document.documentElement;
    html.classList.add('theme-transition');
    const timer = setTimeout(() => html.classList.remove('theme-transition'), 300);

    return () => clearTimeout(timer);
  }, [isDarkMode, themeStyle]);

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
    initial: { scale: 1 }
  };

  return (
    <div className="flex gap-2">
      <motion.button
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onClick={toggleTheme}
        className="p-2 rounded-full border-2 border-[var(--color-secondary)] 
                 hover:bg-[var(--color-secondary)]/10 transition-all duration-300
                 animate-cyber-glow focus:outline-none focus:ring-2
                 focus:ring-[var(--color-secondary)] focus:ring-offset-2
                 focus:ring-offset-[var(--bg-primary)]"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <FaSun className="text-[var(--color-secondary)] text-xl transform transition-transform duration-300" />
        ) : (
          <FaMoon className="text-[var(--color-secondary)] text-xl transform transition-transform duration-300" />
        )}
      </motion.button>
      
      <motion.button
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onClick={() => setThemeStyle(themeStyle === 'masculine' ? 'feminine' : 'masculine')}
        className="p-2 rounded-full border-2 border-[var(--accent-glow)]
                 hover:bg-[var(--accent-glow)]/10 transition-all duration-300
                 animate-cyber-glow focus:outline-none focus:ring-2
                 focus:ring-[var(--accent-glow)] focus:ring-offset-2
                 focus:ring-offset-[var(--bg-primary)]"
        aria-label="Toggle theme style"
      >
        {themeStyle === 'masculine' ? (
          <FaMars className="text-[var(--accent-glow)] text-xl transform transition-transform duration-300" />
        ) : (
          <FaVenus className="text-[var(--accent-glow)] text-xl transform transition-transform duration-300" />
        )}
      </motion.button>
    </div>
  );
};

export default ThemeToggle;