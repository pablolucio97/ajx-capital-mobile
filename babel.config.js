// eslint-disable-next-line no-undef
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            components: './src/components',
            screens: './src/screens',
            themes: './src/themes',
            services: './src/services',
            data: './src/data',
            hooks: './src/hooks',
            contexts: './src/contexts',
            utils: './src/utils',
          },
        },
      ],
    ],
  };
};
