/** @type {import('tailwindcss').Config} */
import colors from "./config/colors.config";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        "source-sans-pro": ["Source Sans Pro", "sans"],
      },
      backgroundImage: {
        "hero-bg": "url('/assets/images/heroBackground.png')",
      },
    },
  },
  plugins: [],
};
