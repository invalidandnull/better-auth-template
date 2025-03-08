
export const content = ['./src/**/*.{html,js}'];
export const theme = {
  extend: {},
};
export const plugins = [
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('tailwindcss-animate'), // Ensure this line is included
];