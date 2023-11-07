module.exports = {
  "stories": ["../src/**/*.stories.tsx"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-styling",
    "@storybook/addon-actions",
    "@storybook/addon-styling-webpack",
    ({
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [{
      test: /\.css$/,
      sideEffects: true,
      use: [
          require.resolve("style-loader"),
          {
              loader: require.resolve("css-loader"),
              options: {
                  
                  
              },
          },
      ],
    },],
      }
    }),
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
  ],
  docs: {
    autodocs: true
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  }
};