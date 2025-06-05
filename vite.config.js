import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from "@vitejs/plugin-vue-jsx"; // Vue 的JSX配置

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      vueJsxPlugin()
  ],
})
