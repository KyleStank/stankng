module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.html',
      './src/**/*.ts'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  corePlugins: {
    // Preflight conflicts with @angular/material's base styles.
    // Material's default styles cover everything Preflight covers.
    // If you must use Preflight, please see https://tailwindcss.com/docs/plugins#adding-utilities for creating a custom plugin.
    preflight: false
  },
  plugins: []
}
