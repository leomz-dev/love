/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        minim: {
          cream: '#F5F5F0',
          sand: '#E5E5DC',
          stone: '#2C2C2C',
          charcoal: '#1A1A1A'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif']
      }
    }
  }
}