/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Black: "#000000",
        White: "#FFFFFF",
        Blue: "#378BD0",
        Orange: "#E74D00",
      },
    },
  },
  plugins: [],
};
