module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    // 'standard',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/prettier',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    // parser: 'espree',
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    'vue/script-setup-uses-vars': 'error',
    'vue/multi-word-component-names': 'off',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
