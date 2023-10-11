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
      },
      colors: {
        primary: "#1E3D33",
        secondary: "#12261E",
        background: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
