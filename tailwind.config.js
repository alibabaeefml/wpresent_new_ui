/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        blue: "#5000ff",
        purple: "#8a00ff",
        lightpurple: "#ba9ee1",
        silver: "#f7f5f9",
      },
    },
  },
  plugins: [],
};
