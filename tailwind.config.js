/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGrey: "#F0F2F5",
        midGrey: "#344054",
        grey500: "#667185",
        grey700: "#344054",
        deepGrey: "#101928",
        lemonGreen: "#8BC043",
        green: "#226A35",
        green500: "#1F6030",
        deepGreen: "#07150B",
        greyBlack: "#333333"
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      backgroundImage: {
        heroFour: "url('/src/assets/images/hero_4.png')",
        heroSix: "url('/src/assets/images/hero_6.png')",
        heroSeven: "url('/src/assets/images/hero_7.png')",
        heroEight: "url('/src/assets/images/hero_8.png')",
        heroNine: "url('/src/assets/images/hero_9.png')",
        heroAbout: "url('/src/assets/images/aboutUsStory.png')",
        heroProduct: "url('/src/assets/images/heroProducts.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
