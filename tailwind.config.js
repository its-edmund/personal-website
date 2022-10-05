/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-25deg)" },
          "50%": { transform: "rotate(25deg)" },
        },
      },
    },
    fontFamily: {
      heading: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
