import { useLanguageStore } from '../store/languageStore';
import { Menu } from '@headlessui/react';
import { motion } from 'framer-motion';

const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguageStore();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="p-2 rounded-lg border-2 border-neon-magenta hover:bg-neon-magenta/10 transition-colors font-poppins">
        {currentLanguage.toUpperCase()}
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-24 bg-deep-blue border-2 border-neon-magenta rounded-lg overflow-hidden">
        <Menu.Item>
          {({ active }) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={`${
                active ? 'bg-neon-magenta/10' : ''
              } w-full p-2 text-left`}
              onClick={() => setLanguage('en')}
            >
              English
            </motion.button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={`${
                active ? 'bg-neon-magenta/10' : ''
              } w-full p-2 text-left`}
              onClick={() => setLanguage('ur')}
            >
              اردو
            </motion.button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default LanguageSelector;