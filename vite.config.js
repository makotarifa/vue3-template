import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'
import path from 'node:path'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProd = mode === 'production';

  // Custom plugin to stub out `mocks` imports in production builds
  const excludeMocksPlugin = {
    name: 'exclude-mocks-prod',
    enforce: 'pre',
    load(id) {
      if (!isProd) return null;
      // Match imports that reference a `mocks` folder anywhere in the id
      const mocksRegexp = /[\\/]mocks[\\/]/;
      if (mocksRegexp.test(id)) {
        // Return an empty module so the mocks aren't bundled into production
        return 'export const __is_mock_placeholder = true; export default {}';
      }
      return null;
    },
  };

  return {
    plugins: [
      vue(),
      tsconfigPaths(),
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
        dirs: [
          'src/components',
          'src/domain/**/components',
        ],
        dts: 'src/components.d.ts',
      }),
      // insert our plugin last so it runs before other plugins for `mocks` replacement
      excludeMocksPlugin,
    ],
    resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    },
  };
});
