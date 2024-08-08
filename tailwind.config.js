/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Kanit', 'sans-serif'],
        mitr: ['Mitr', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        noto: ['Noto Sans Thai Looped', 'sans-serif'],
        embed: ['Permanent Marker', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
      },
      animation: {
        gradient: "gradient 6s linear infinite",
        loopscroll: "loopscroll 50s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        loopscroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
}
