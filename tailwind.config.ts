import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#F4D04E",
        gray950: "#111111",
        gray500: "#6B6B6B",
      },
      fontFamily: {
        figtree: "figtree",
      },
    },
  },
  plugins: [],
} satisfies Config;
