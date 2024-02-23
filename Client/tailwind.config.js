/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{ mytheme: {
          
      "primary": "#d3ba00",
               
      "secondary": "#aa85dd",
               
      "accent": "#abea6b",
               
      "neutral": "#21252c",
               
      "base-100": "#2a3b55",
               
      "info": "#8b9ee5",
               
      "success": "#18773c",
               
      "warning": "#f1c822",
               
      "error": "#f66a8a",
               },}],
  },
}

