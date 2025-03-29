const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",       // nếu dùng Next.js App Router
        "./pages/**/*.{js,jsx,ts,tsx}",     // nếu dùng Pages Router
        "./components/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}", // đảm bảo load các lớp từ HeroUI
    ],
    darkMode: "class",
    theme: {
        extend: {},
    },
    plugins: [heroui()],
};