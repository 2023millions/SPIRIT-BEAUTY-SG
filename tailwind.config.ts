import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#25221f",
        cream: "#f8f4ee",
        sand: "#e8ded1",
        blush: "#d8bdb0",
        cocoa: "#735b50",
        sage: "#617369",
      },
      boxShadow: { soft: "0 20px 60px rgba(76, 57, 45, 0.10)" },
    },
  },
  plugins: [],
} satisfies Config;
