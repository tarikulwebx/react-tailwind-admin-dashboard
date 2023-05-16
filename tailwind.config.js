/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // primary: "#22c55e",
                primary: "var(--color-primary)",
            },
        },
    },
    plugins: [],
};

