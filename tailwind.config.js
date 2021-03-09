module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      fontSize: {
        mobile: "8px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
