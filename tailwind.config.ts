import type {Config} from 'tailwindcss';
import {fontFamily} from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

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
          base: colors.teal[500],
          dark: colors.teal[600],
          darker: colors.teal[700],
          darkest: colors.teal[900],
          light: colors.teal[300],
          lighter: colors.teal[200],
          lightest: colors.teal[50],
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
