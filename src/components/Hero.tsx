import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useLanguageStore } from '../store/languageStore';
import profileImage from '../img/Profile.jpg'; // Import the image

const Hero = () => {
  const { currentLanguage } = useLanguageStore();

  useEffect(() => {
    gsap.from('.hero-content', {
      opacity: 10,
      y: 30,
      duration: 1,
      ease: 'power2.out'
    });
  }, []);

  const content = {
    en: {
      greeting: "Hi, I'm",
      roles: [
        'Frontend Developer(React)',
        2000,
        'JavaScript Developer',
        2000,
        'Web Developer',
        2000,
        'Web App Developer',
        2000,
      ],
      cta: {
        work: 'View My Work',
        contact: 'Contact Me'
      }
    },
    ur: {
      greeting: "میں ہوں",
      roles: [
  'فرنٹ اینڈ ڈویلپر',
  2000,
  'یو آئی/یو ایکس ڈیزائنر',
  2000,
  'تخلیقی مسئلہ حل کرنے والا',
  2000,
  'سافٹ ویئر ڈویلپر',
  2000,
  'ویب ڈویلپر',
  2000,
],
      cta: {
        work: 'میرا کام دیکھیں',
        contact: 'رابطہ کریں'
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6">
        <div className="hero-content flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6">
              {content[currentLanguage].greeting}{' '}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
                DevMagic
              </span>
            </h1>
            <div className="text-xl md:text-2xl mb-8 font-poppins min-h-[2em]">
              <TypeAnimation
                sequence={content[currentLanguage].roles}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-neon-cyan rounded-lg font-poppins font-semibold 
                         transition-all duration-300 hover:bg-neon-cyan/10 hover:animate-glow"
              >
                {content[currentLanguage].cta.work}
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-neon-magenta rounded-lg font-poppins font-semibold 
                         transition-all duration-300 hover:bg-neon-magenta/10 hover:animate-glow"
              >
                {content[currentLanguage].cta.contact}
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon-cyan animate-glow">
             <img
  src={profileImage} 
  alt="DevMagic"
  className="w-full h-full object-cover"
/>
 </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
