import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "#d361f380"
            },
            height: {
                '1/10': '10vh'
            },
            screens: {
                'xl': '1441px'
            }
        },
    },
    plugins: [],
};
export default config;
