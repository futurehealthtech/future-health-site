/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clay: {
          50:  "#f6efe8",
          100: "#efe2d3",
        },
        sand: {
          50:  "#f8f1e5",
          100: "#f4ead8",
        },
        camel: {
          100: "#e5cfb3",
          200: "#d8b892",
          400: "#c19a6b", // accent if you want it richer
        },
        fern: {
          50:  "#e6f4ec",
          600: "#4f7942", // main fern
        },
      },
    },
  },
  plugins: [],
};

