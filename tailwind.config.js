/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#222",
        secondary: "#f7f6f1",
      },
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
        Londrina: ["Londrina Shadow", "cursive"],
        rubik: ["Nosifer", "cursive"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
