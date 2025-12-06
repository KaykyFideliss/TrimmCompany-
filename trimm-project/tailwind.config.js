// tailwind.config.js
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        homem: { 
          "50": "#e7f3fe", 
          "100": "#cee6fd", 
          "200": "#9dcefb", 
          "300": "#6cb5f9", 
          "400": "#3b9cf7", 
          "500": "#0a83f5", 
          "600": "#0869c4", 
          "700": "#064f93", 
          "800": "#043562", 
          "900": "#021a31", 
          "950": "#011222",
          "1000": "#171717",
        } 
      },
      fontFamily: {
        "zalando": ["Zalando Sans Expanded, sans-serif"],
      },
    },
  },
  plugins: [],
};