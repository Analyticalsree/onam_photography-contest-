/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'realm-dark': {
          DEFAULT: '#07091B',
          darkest: '#03040F',
          deep: '#0B0C24',
          panel: '#0F1133',
          border: '#1E2355'
        },
        'mystic-cyan': {
          DEFAULT: '#00F2FE',
          light: '#70F6FF',
          bright: '#00D2FF',
          emerald: '#38EF7D',
          dark: '#0083B0'
        },
        'mystic-violet': {
          DEFAULT: '#C084FC',
          light: '#F5D0FE',
          bright: '#E879F9',
          deep: '#9333EA',
          dark: '#581C87'
        },
        'mystic-gold': {
          DEFAULT: '#FDE047',
          light: '#FEF08A',
          amber: '#F59E0B',
          deep: '#B45309'
        },
        'kerala-gold': {
          DEFAULT: '#FDE047',
          light: '#FEF08A',
          bright: '#FFD700',
          amber: '#F59E0B',
          deep: '#B45309'
        },
        'kerala-green': {
          DEFAULT: '#07091B',
          darkest: '#03040F',
          dark: '#0B0C24',
          emerald: '#00F2FE',
          light: '#C084FC',
          accent: '#E879F9'
        },
        'kerala-cream': {
          DEFAULT: '#F3E8FF',
          warm: '#E9D5FF',
          dark: '#C084FC'
        },
        'kerala-red': {
          DEFAULT: '#C084FC',
          dark: '#581C87',
          bright: '#E879F9'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient-mystic': 'radial-gradient(circle, rgba(192,132,252,0.2) 0%, rgba(3,4,15,0) 75%)',
        'radial-gradient-cyan': 'radial-gradient(circle, rgba(0,242,254,0.25) 0%, rgba(7,9,27,0) 80%)',
        'mystic-shimmer': 'linear-gradient(135deg, #00F2FE 0%, #C084FC 40%, #E879F9 70%, #FDE047 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', filter: 'drop-shadow(0 0 18px rgba(0, 242, 254, 0.5))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 30px rgba(192, 132, 252, 0.9))' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      }
    },
  },
  plugins: [],
}

