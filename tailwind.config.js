/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      display: ["group-focus"],
      colors: {
        primary: "#7F56D9",
        screen: "#F9F5FF",
        write: "#646E83",
        darkpurple: "#42307D",
      },
    },
  },
  plugins: [],
};
