/** @type {import('tailwindcss').Config} */
module.exports = {
  /** 2024/04/04 - calc class 설정 */
  mode: "jit",
  content: [
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        default: "calc((100%-1200px)/2)",
      },
    },
  },
  plugins: [],
};
