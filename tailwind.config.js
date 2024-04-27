/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8982FF',
        'primary-light': '#6C63FF',
        'primary-dark': '#564fcc',
        'secondary': '#4D5260',
        'secondary-light': '#212738',
        'secondary-dark': '#1a1f2d',
        'light':'#f1ece9',
        'light-light': '#EDE7E3',
        'light-dark': '#beb9b6', 
      }
    },
  },
  plugins: [],
}

