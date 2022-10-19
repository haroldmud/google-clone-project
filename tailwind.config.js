/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontSize: {
        "15s": "15px",
        "14s": "14px",
        "8s": "8px",
        "5s": "5px",
      },
      colors: {
        grayf2: "#f2f2f2",
      },
      padding: {
        "9s": "9px",
        "5s": "5px",
      },
      width: {
        "32r": "32rem",
        "15r": "15rem",
      },
      fontFamily: {
        sans: "Helvetica, Arial, sans-serif",
      },
      borderRadius: {
        "3s": "3px",
      },
    },
  },
  plugins: [],
};
