/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'banner': "url('images/banner.jpg')",
      'favorites': "url('images/favorites.jpg')",
      'places': "url('images/places.jpg')",
      'contact': "url('images/contact.jpg')",
      
      
    }
  },
  plugins: [],
}