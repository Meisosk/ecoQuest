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
    },
  },
  plugins: [],
};
