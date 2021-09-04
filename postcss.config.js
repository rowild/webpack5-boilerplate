module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-preset-env')({
      state: 0,
      browsers: 'last 2 versions',
      'nesting-rules': true
    }),
  ],
};
