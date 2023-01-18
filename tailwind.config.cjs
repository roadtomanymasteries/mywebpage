/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'icon': 'rgb(217 162 114)',
        'font': '#888888',
      },
      spacing: {
        '74': '18.5rem',
        '128': '32rem',
        '140': '36rem',
        '156': '90vh',
      },
      boxShadow: {
        '3xl':
          '50px 0 50px 0 rgba(0, 0, 0, 0.1), -50px 0 50px 0 rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        'main': '0.9rem',
      },
    },
  },
  plugins: [],
};
