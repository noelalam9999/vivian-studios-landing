import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      averta: ["Averta", "sans-serif"],
      flanel: ["Flanel", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      cursor: {
        play: `url("https://res.cloudinary.com/dsuiwxwkg/image/upload/v1725196765/play_jjss3i.png"), pointer`,
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
