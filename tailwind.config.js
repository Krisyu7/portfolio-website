export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'playfair': ['Playfair Display', 'serif'],
                'mono': ['Space Mono', 'monospace'],
            }
        },
    },
    plugins: [],
}