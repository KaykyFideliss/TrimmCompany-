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

        /* Paleta mulher */
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

        /* Paleta DUST */
        dust: {
          50: '#f9f9fa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },

        /* Paleta OCEAN */
        ocean: {
          50: '#e7f3fe',
          500: '#0a83f5',
          600: '#0869c4',
          900: '#021a31',
        },

        /* Paleta PETAL */
        petal: {
          50: '#fdf2f8',
          500: '#db2777',
        },

        /* Variáveis globais */
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
