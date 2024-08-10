// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  // Your custom configs here
  rules: {
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
});
