module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        primary: {
          100: "#E6F6FE",
          200: "#C0EAFC",
          300: "#9ADDFB",
          400: "#4FC3F7",
          500: "#2870DE", // button color
          600: "#0398DC",
          700: "#026592",
          800: "#014C6E",
          900: "#013349",
          1000: "#2870DE",
          1100: "#ffffff", // white
        },
        gray: {
          100: "#f7fafc",
          200: "#D4D4D4",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
          1000: "#303030",
          1100: "#F3F3F3", // animation black background
          1200: "#000000", // hero text color
          1300: "#F0F2F5", // hero background color
          1400: "#303030", // card colors
          1500: "#A8A8A8", // card text color
          1600: "#272727", // black background
          1700: "#E9E9E9", // profile card background color
          1800: "#505050", // profile card text color
          1900: "#D1D1D1", // metric card text color
          2000: "#000000", // secondary black background
          2100: "#3E3E3E", // founder card text color
          2200: "#242526", // card background gray on black
          2300: "#ffffff", // font on gray on black
          2400: "#030303", // navbar black background
        },
        logo: {
          100: "#2FA9DE",
          200: "#2E5E92",
          300: "#272A67",
        },
        // white: {
        //   100: "#ffffff",
        //   200: "#F3F3F3",
        // },
      },
      lineHeight: {
        hero: "4.5rem",
      },

      fontFamily: {
        sans: ["Manrope", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: () => ({
        "solution-hero": "url('/assets/images/heatSink.jpg')",
        "home-hero": "url('/assets/images/bubbles.png')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
