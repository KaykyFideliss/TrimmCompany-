export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        zalando: ['"Zalando Sans Expanded"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },

      colors: {
        /* Paleta homem (sua paleta personalizada original) */
        homem: {
          50: "#e7f3fe",
          100: "#cee6fd",
          200: "#9dcefb",
          300: "#6cb5f9",
          400: "#3b9cf7",
          500: "#0a83f5",
          600: "#0869c4",
          700: "#064f93",
          800: "#043562",
          900: "#021a31",
          950: "#011222",
          1000: "#171717",
        },
        mulher: {
          50: '#ffe5f6',
          100: "#ffccee",
          200: "#ff99dd",
          300: "#ff66cc",
          400: "#ff33bb",
          500: "#ff00aa",
          600: "#cc0088",
          700: "#990066",
          800: "#660044",
          900: "#330022",
          950: "#240018"
        },
        /* Variáveis CSS globais */
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    }
  },
  plugins: [],
};