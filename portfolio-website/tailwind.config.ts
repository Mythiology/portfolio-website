import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      lineClamp: {
        2: '2',
      },
      colors: {
        'tori-white': '#e5e5e5',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      // This is where you map custom fonts from the ttf files through fonts/stylesheet.css
      fontFamily: {
        PatrickHandSC: ['PatrickHandSC', 'sans-serif'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
export default config;
