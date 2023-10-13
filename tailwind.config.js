/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{html,js,jsx}",
    "./src/components/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      height: {
        90: "90%",
        95: "95%",
        55: "55%",
        35: "35%",
      },
      width: {
        70: "70vw",
      },
      margin: {
        1.7: "1.7vw",
      },
      colors: {
        primary: "#1E3D33",
        secondary: "#12261E",
        background: "#1E1E1E",
        xp: "#4F741F",
        button: "#F18320",
        landbg: "#5B805F",
      },
    },
  },
  plugins: [],
};
