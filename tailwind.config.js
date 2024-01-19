/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        chivoMono: ['var(--font-cinzel)']
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#570861", // 240, 86, 199
        primaryDark: "#58E6D9", // 80, 230, 217
       // #570861
      }
    },
  },
  plugins: [],
}
