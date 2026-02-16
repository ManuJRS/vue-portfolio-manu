import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs['flat/recommended'],

  {
    files: ['**/*.{ts,tsx,js,jsx,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // JS/TS
      quotes: ['error', 'single'],
      semi: ['error', 'never'],

      // Vue (para que no moleste)
      'vue/html-quotes': 'off',
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',

      // si usas defineProps y guardas en const props a veces:
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^props$' },
      ],
    },
  },
]
