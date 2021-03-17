import vue from '@vitejs/plugin-vue';

/**
 * @type {import('vite').UserConfig}
 */
export default {
    plugins: [
        vue(),
    ],

    optimizedCacheDir: 'c:/web/lessons/temp',

    server: {
        port: 80,
    }
}
