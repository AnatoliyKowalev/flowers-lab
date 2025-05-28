module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['var(--font-rubik, "Rubik", sans-serif)'],
        lora: ['var(--font-lora, "Lora", sans-serif)'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
