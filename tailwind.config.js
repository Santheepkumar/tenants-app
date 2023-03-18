module.exports = {
  content: [],
  theme: {
    screens: {
      sm: "375px",
      md: "420px",
      lg: "680px",
      // or maybe name them after devices for `tablet:flex-row`
      tablet: "1024px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        hiti: {
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        brand: {
          800: "#056733",
          700: "#1C8336",
          500: "#60A00C",
          300: "#AEC90E",
        },
        brand1: {
          400: "#FFB431",
          500: "#FF7F0A",
        },
        brand2: {
          100: "#F4F5F5",
        },
      },
    },
  },
  plugins: [],
};
