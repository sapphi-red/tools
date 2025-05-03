import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import vue from 'eslint-plugin-vue'
import globals from 'globals'

export default tseslint.config(
  {
    languageOptions: {
      sourceType: 'module',
      globals: { ...globals.browser }
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    }
  },
  eslint.configs.recommended,
  ...[...tseslint.configs.recommended, ...tseslint.configs.stylistic].map(c => {
    if (c.name === 'typescript-eslint/eslint-recommended') {
      // apply to `<script lang='ts'>` in `.vue` files
      c.files = ['**/*.{c|m|}ts', '**/*.vue']
    }
    return c
  }),
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  },
  {
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off'
    }
  },
  eslintConfigPrettier,
  {
    ignores: ['dist/**']
  }
)
