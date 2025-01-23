/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00fff5',
        'neon-magenta': '#ff00ff',
        'neon-purple': '#b026ff',
        'neon-lime': '#39ff14',
        'deep-blue': '#020223',
        'darker-blue': '#010111'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'cursor-blink': 'cursor-blink 1s step-end infinite'
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 5px #00fff5, 0 0 10px #00fff5, 0 0 15px #00fff5' },
          '100%': { 'box-shadow': '0 0 10px #00fff5, 0 0 20px #00fff5, 0 0 30px #00fff5' }
        },
        'cursor-blink': {
          '50%': { opacity: '0' }
        }
      }
    }
  },
  plugins: []
}