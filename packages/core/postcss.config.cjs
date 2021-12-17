module.exports = {
  plugins: [
    require('tailwindcss')(),
    require('autoprefixer')(),
    require('postcss-prefix-selector')({
      prefix: '.trpc-playground',
      transform: function(prefix, selector, prefixedSelector) {
        if (['body', 'html', '.trpc-playground'].includes(selector)) {
          return prefix
        } else {
          return prefixedSelector
        }
      },
    }),
  ],
}
