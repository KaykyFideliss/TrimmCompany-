/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'], // Para títulos grandes
      },
      colors: {
        border: "hsl(var(--border))", // Variável para bordas sutis
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Paleta DUST (Base Estrutural - Estilo Clean/n8n)
        dust: {
          50: '#f9f9fa',   // Fundo Light Principal
          100: '#f4f4f5',  // Fundo Secundário
          200: '#e4e4e7',  // Bordas Light
          300: '#d4d4d8',
          400: '#a1a1aa',  // Texto Secundário
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',  // Fundo Secundário Dark
          900: '#18181b',  // Fundo Dark Principal
          950: '#09090b',  // Bordas/Detalhes Dark
        },
        // Paleta OCEAN (Acentos e Branding Masculino/Tech)
        ocean: {
          50: '#e7f3fe',
          500: '#0a83f5', // Primary Brand Color
          600: '#0869c4',
          900: '#021a31',
        },
        // Paleta PETAL (Detalhes sutis/Feminino)
        petal: {
          50: '#fdf2f8',
          500: '#db2777',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}