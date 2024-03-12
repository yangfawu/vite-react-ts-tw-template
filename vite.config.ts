import react from "@vitejs/plugin-react-swc"
import path from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            "@/components": path.resolve(__dirname, "./src/components"),
            "@/assets": path.resolve(__dirname, "./src/assets"),
        },
    },
})
