/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Orange: "#ED7017",
        Blue: "#00BFF3",
        White: "#F4F4F4",
        Black: "#222222",
      },
    },
  },
  plugins: [],
};
