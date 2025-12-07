import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          'vee-validate': [
            'useField',
            'useForm',
            'useFieldArray',
            'handleSubmit',
            'defineRule',
            'configure',
          ],
        },
        {
          '@vueuse/core': [
            // you can add functions to auto import if desired
          ],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables'],
      vueTemplate: true,
    }),
    Components({
      resolvers: [
        PrimeVueResolver({
          importStyle: false,
          importIcons: true,
          importTheme: false,
        }),
      ],
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
