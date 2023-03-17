import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginStyleInject from 'vite-plugin-style-inject'
import path from 'path'

export default defineConfig({
  plugins: [vue(), VitePluginStyleInject()],
  // optimizeDeps: {
  //   exclude: ['mhalo.kindeditor'],
  // },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'VKindEditor',
      fileName: (format) => `mhalo.vue-kindeditor.${format}.js`
    },
    outDir: 'dist',
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      // external: ['vue', 'mhalo.kindeditor'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          // 'mhalo.kindeditor': 'KindEditor'
        }
      }
    }
  },
  server: {
      host: '127.0.0.1',
      port: 8080,
      open: false,
      hmr: true,
      proxy: [
          '/authen', '/sysmenu', '/sysuser',
          '/images', '/handler', '/uploadfiles',
          '/sysrole', '/sys-user-role', '/sys-user-auth',
          '/sys-role-auth', '/sys-auth', '/property-dictionary'
      ].reduce((t, c, i) => { 
          const proxyHost = 1 ? 'http://127.0.0.1:5801/' : 'http://192.168.2.222:5801/';
          t[c] = {
              target: proxyHost,
              changeOrigin: true,
              rewrite: (path) => path
          }
          return t
      }, {})
  }
})
