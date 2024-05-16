// импортируем из библиотеки vite функцию defineConfig, которая принимает объект с настройками
import { defineConfig } from 'vite';

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import { resolve } from 'path';

// вызываем функцию, которая вернет свойства по умолчанию и те свойства, что мы прописали
export default defineConfig({
    root: './src', // корень проекта - папка src
    publicDir: '../public', // указываем путь к папке public относительно папки src

    // указываем, где создавать build
    build: {
        outDir: '../dist', // папка, куда будет складываться проект
        rollupOptions: {
            input: {
                main: resolve(__dirname, './src/index.html'),
                store: resolve(__dirname, './src/store.html')
            }
        }
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
