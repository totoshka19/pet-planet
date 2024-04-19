// импортируем из библиотеки vite функцию defineConfig, которая принимает объект с настройками
import { defineConfig } from 'vite';

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// вызываем функцию, которая вернет свойства по умолчанию и те свойства, что мы прописали
export default defineConfig({
    root: './src', // корень проекта - папка src
    publicDir: '../public', // указываем путь к папке public относительно папки src

    // указываем, где создавать build
    build: {
        outDir: '../dist'// папка, куда будет складываться проект
    },

    plugins: [
        ViteImageOptimizer({
            png: {
                quality: 80,
            },
            jpeg: {
                quality: 80,
            },
            jpg: {
                quality: 80,
            },
            webp: {
                quality: 80,
            },
            avif: {
                quality: 70,
            },
        }),
    ],
});
