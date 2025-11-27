// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        trimmBarber: {
          50: "#f6f6f7", 
          100: "#e2e3e5",
          200: "#c4c7cc",
          300: "#9ca3ac",
          400: "#6d727c",
          500: "#4a4f57", 
          600: "#2f3237",
          700: "#1c1e22", 
          800: "#111214",
          900: "#0d0d0f", 

          gold: "#D4AF37",
          goldDark: "#A8872E",
        },
      },
    },
  },
  plugins: [],
};
