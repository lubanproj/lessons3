import vue from '@vitejs/plugin-vue';
import autoprefixer from "autoprefixer";
import yml from '@rollup/plugin-yaml';

/**
 * @type {import('vite').UserConfig}
 */
export default {
    plugins: [
        vue(),
        autoprefixer,
        yml(),
    ],

    optimizedCacheDir: 'c:/web/lessons/temp',

    server: {
        port: 80,
    },
}
