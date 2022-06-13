import { defineConfig, searchForWorkspaceRoot, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import styleImport from 'vite-plugin-style-import'
import visualizer from 'rollup-plugin-visualizer'
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'

const { resolve } = path

export default ({ mode }) => {
  return defineConfig({
    base: '',
    plugins: [
      vue(),
      styleImport({
        libs: [],
      }),
      visualizer({
        // open: true,
        gzipSize: true,
        brotliSize: true,
      }),
      importToCDN({
        modules: [
          //   autoComplete('axios'),
        ],
      }),
    ],
    server: {
      // host: "",
      port: 1000,
      fs: {
        allow: [searchForWorkspaceRoot(process.cwd())],
      },
      proxy: {
        // "/api": {
        //   target: "",
        //   changeOrigin: true,
        //   ws: true,
        //   rewrite: (path) => path.replace(/^\/api/, ""),
        // },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: [
        { find: /^~/, replacement: '' },
        { find: /^\/@/, replacement: resolve(__dirname, 'src') },
      ],
    },
    build: {
      sourcemap: true,
      rollupOptions: {},
    },
  })
}
