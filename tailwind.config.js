/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#5A86AD",
        secondary: "#AB5AAD",
        accent: "#AD815A",
      },
    },
  },
  plugins: [],
};
