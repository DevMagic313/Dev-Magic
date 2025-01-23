/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neon-cyan': 'var(--color-secondary)',
        'neon-magenta': 'var(--accent-glow)',
        'neon-purple': '#b026ff',
        'neon-lime': '#39ff14',
        'deep-blue': 'var(--bg-primary)',
        'darker-blue': 'var(--bg-secondary)'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'glitch': 'glitch 1s ease-in-out infinite',
        'cyber-glow': 'cyber-glow 2s ease-in-out infinite'
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 5px var(--neon-glow), 0 0 10px var(--neon-glow)' },
          '100%': { 'box-shadow': '0 0 10px var(--neon-glow), 0 0 20px var(--neon-glow)' }
        },
        'cursor-blink': {
          '50%': { opacity: '0' }
        }
      }
    }
  },
  plugins: []
}