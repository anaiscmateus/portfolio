/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-background': '#121212',  // Custom background color
        'custom-foreground': '#D4D4D8',  // Custom foreground color
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
