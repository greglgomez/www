/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // Tufte-inspired customizations
            '--tw-prose-body': '#111111',
            '--tw-prose-headings': '#111111',
            '--tw-prose-links': '#805ad5',
            '--tw-prose-bold': '#111111',
            '--tw-prose-counters': '#666666',
            '--tw-prose-bullets': '#666666',
            '--tw-prose-quotes': '#111111',
            '--tw-prose-quote-borders': '#e0e0e0',
            '--tw-prose-code': '#111111',
            '--tw-prose-pre-code': '#e5e5e5',
            '--tw-prose-pre-bg': '#1a1a1a',

            color: 'var(--tw-prose-body)',

            // Increased line height for better readability (Tufte style)
            lineHeight: '1.8',

            // Better spacing
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },

            // Headings with more breathing room
            'h2, h3, h4': {
              marginTop: '2em',
              marginBottom: '0.75em',
            },

            // Lists with better spacing
            'ul, ol': {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            'li': {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },

            // Blockquotes Tufte-style
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: 'var(--tw-prose-quote-borders)',
              quotes: 'none',
            },

            // Links that match body text but underlined
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'underline',
              fontWeight: 'inherit',
              '&:hover': {
                color: '#6b46c1',
              },
            },
          },
        },
        // Dark mode (prose-invert)
        invert: {
          css: {
            '--tw-prose-body': '#e5e5e5',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-links': '#b794f6',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-counters': '#a3a3a3',
            '--tw-prose-bullets': '#a3a3a3',
            '--tw-prose-quotes': '#e5e5e5',
            '--tw-prose-quote-borders': '#333333',
            '--tw-prose-code': '#e5e5e5',
            '--tw-prose-pre-code': '#e5e5e5',
            '--tw-prose-pre-bg': '#1e1e1e',

            a: {
              color: 'var(--tw-prose-links)',
              '&:hover': {
                color: '#d6bcfa',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
