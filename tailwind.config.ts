import type {Config} from 'tailwindcss';
import {fontFamily} from 'tailwindcss/defaultTheme';

// Font size of the root element is 16px by default
const spacingUnits = {
  xs: '0.5rem', // 8px
  sm: '1rem', // 16px
  md: '1.5rem', // 24pt
  lg: '2rem', // 32pt
  xl: '3rem', // 48pt
  xxl: '5rem', // 80pt
};

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['BricolageGrotesque', ...fontFamily.sans],
      },
      colors: {
        primary: {
          base: '#4f828b',
          dark: '#456c75',
          darker: '#3a565e',
          darkest: '#314248',
          light: '#9bc0c5',
          lighter: '#c4dadd',
          lightest: '#f3f8f8',
        },
        secondary: {
          base: '#ffff00',
          dark: '#d1bf00',
          darker: '#a68b02',
          darkest: '#74580f',
          light: '#ecff41',
          lighter: '#eeff86',
          lightest: '#fbffe7',
        },
      },
      spacing: spacingUnits,
      gap: spacingUnits,
      margin: spacingUnits,
      padding: spacingUnits,
      borderRadius: spacingUnits,
    },
  },
  plugins: [],
};

export default config;
