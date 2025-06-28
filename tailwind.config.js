/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contents/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Neue: ["Neue Machina"]
      },
      backgroundImage: {
        'gradient-border': 'linear-gradient(to right, #F5F5F5, #B8E43F)',
      },
      keyframes: {
        fadein: {
          '0%': {  transform: 'translateY(40px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadein: 'fadein 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
