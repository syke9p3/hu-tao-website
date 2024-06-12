/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        heading: ["Just Another Hand", "sans-serif"],
      },
      background: {
        dark: ["#202020"],
      },
      textColor: {
        primary: ["#FFFFFF70"],
      },
      scale: {
        "-100": "-1",
      },
    },

    plugins: [],
  },
};
