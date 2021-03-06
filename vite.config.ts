import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
// import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
// https://github.com/rollup/plugins/tree/master/packages/graphql
import graphql from '@rollup/plugin-graphql'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    vueI18n({
      // you need to set i18n resource including paths !
      include: resolve(__dirname, './src/locales/**'),
    }),
    // https://github.com/antfu/unplugin-auto-import
    // todo would be great to implement in future
    // AutoImport({
    //   imports: ['vue', 'vue-router', 'vue-i18n'],
    //   dts: './src/types/auto-imports.d.ts',
    // }),
    graphql(),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: [
      '@apollo/client/core', 
      '@apollo/client/link/error',
      'vuetify/lib/components/VCard/index.mjs',
      'vuetify/lib/components/VTable/index.mjs'
    ],
    exclude: ['@apollo/client'],
  },
})
