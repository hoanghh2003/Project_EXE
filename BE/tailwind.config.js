/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // tailwind.config.js
  theme: {
    extend: {
      animation: {
        gradientAnimation: "gradientAnimation 8s ease infinite",
        floatAnimation: "floatAnimation 3s ease-in-out infinite",
        typing: "typing 3s steps(40, end), blinkCursor 0.75s step-end infinite",
      },
      keyframes: {
        gradientAnimation: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        floatAnimation: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blinkCursor: {
          from: { borderColor: "#3b82f6" },
          to: { borderColor: "transparent" },
        },
      },
    },
  },

  plugins: [],
};
