/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,mdx,md}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  'rgba(var(--color-primary-50), <alpha-value>)',
          100: 'rgba(var(--color-primary-100), <alpha-value>)',
          200: 'rgba(var(--color-primary-200), <alpha-value>)',
          300: 'rgba(var(--color-primary-300), <alpha-value>)',
          400: 'rgba(var(--color-primary-400), <alpha-value>)',
          500: 'rgba(var(--color-primary-500), <alpha-value>)',
          600: 'rgba(var(--color-primary-600), <alpha-value>)',
          700: 'rgba(var(--color-primary-700), <alpha-value>)',
          800: 'rgba(var(--color-primary-800), <alpha-value>)',
          900: 'rgba(var(--color-primary-900), <alpha-value>)',
        },
        neutral: {
          50:  'rgba(var(--color-neutral-50), <alpha-value>)',
          100: 'rgba(var(--color-neutral-100), <alpha-value>)',
          200: 'rgba(var(--color-neutral-200), <alpha-value>)',
          300: 'rgba(var(--color-neutral-300), <alpha-value>)',
          400: 'rgba(var(--color-neutral-400), <alpha-value>)',
          500: 'rgba(var(--color-neutral-500), <alpha-value>)',
          600: 'rgba(var(--color-neutral-600), <alpha-value>)',
          700: 'rgba(var(--color-neutral-700), <alpha-value>)',
          800: 'rgba(var(--color-neutral-800), <alpha-value>)',
          900: 'rgba(var(--color-neutral-900), <alpha-value>)',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.primary.700'),
            '--tw-prose-invert-links': theme('colors.primary.400'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
