/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx, vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        serif: ['"DejaVu Serif"', 'Georgia'],
        mono: ['inconsolata', 'monospace'],
        display: ['Oswald'],
        body: ['open-sans'],
        yeseva: ['"Yeseva One"', 'serif'],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],

  daisyui: {
    themes: [],
  },
};
