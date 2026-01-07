/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Inter', 'sans-serif'],
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        silver: {
          green: '#4ade80', // Light green
          blue: '#38bdf8',  // Light blue
          dark: '#0f172a',  // Deep Slate
          light: '#f8fafc',
        },
        primary: {
          DEFAULT: '#38bdf8', // Blue dominant
          accent: '#4ade80',  // Green accent
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')", // Abstract Earth/Network
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

