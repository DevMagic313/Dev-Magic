import '@fontsource/montserrat/700.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/roboto/400.css';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
// import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useThemeStore } from './store/themeStore';

function App() {
  const { isDarkMode, themeStyle } = useThemeStore();

  // Initialize scroll animations
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.scroll-fade-in, .scroll-scale-in').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Apply theme classes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.classList.toggle('light', !isDarkMode);
    document.documentElement.setAttribute('data-theme', themeStyle);
  }, [isDarkMode, themeStyle]);

  return (
    <div className={`min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300`}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
{/*       <Blog /> */}
      <Contact />
      <Footer />
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            border: '2px solid var(--color-secondary)'
          }
        }}
      />
    </div>
  );
}

export default App;
