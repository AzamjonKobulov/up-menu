/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1025px",
        xl: "1280px",
        "2xl": "1440px",
      },
      maxWidth: {
        base: "78.25rem",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        brand: {
          orange: {
            DEFAULT: "#FF8214",
            100: "#FFF2E7",
            200: "#FFC693",
          },
          dark: "#242424",
          darker: "#2E2E2E",
          gray: {
            100: "#E6E6E6",
            200: "#B0B0B0",
            300: "#EAEAEA",
          },
        },
      },
      fontSize: {
        13: "13px",
        15: "15px",
      },
      boxShadow: {
        point: "0px 2px 4px -2px #00000024",
        benefit: "0px 4px 10px -4px #7B431229;",
        accordion: "0px 6px 26px -8px #0000001F;",
        menu: "0px 2px 6px -2px #00000014;",
      },
    },
  },
  plugins: [],
};
