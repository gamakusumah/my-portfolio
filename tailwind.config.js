/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "834px",
      // => @media (min-width: 834px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        text: "#171717",
        prim: "#FFB400",
        caption: "#767676",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          "@screen md": {
            maxWidth: "690px",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen lg": {
            maxWidth: "1050px",
            marginLeft: "auto",
            marginRight: "auto",
          },
        },
      });
    },
  ],
};
