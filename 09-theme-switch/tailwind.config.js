import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    darkMode:"class",
    plugins: [react(),tailwindcss()],
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
          `,
        },
      },
    },
  })
  