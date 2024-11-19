/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "475px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        primary: "hsl(0, 100%, 74%)",
        secondary: "hsl(154, 59%, 51%)",
        secondaryLight: "hsl(154, 59%, 65%)",
        accent: "hsl(248, 32%, 49%)",
        darkBlue: "hsl(249, 10%, 26%)",
        grayishBlue: "hsl(246, 25%, 77%)",
        form: "hsl(249, 10%, 48%)",
      },
      boxShadow: {
        custom: "0 8px  rgba(0,0,0,0.20)",
        customTwo: "0 4px  hsl(154, 59%, 45%)",
      },
    },
  },
  plugins: [],
};
