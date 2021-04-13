// vue.config.js file to be place in the root of your repository
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuejs-pwa-project/'
    : '/',
};

module.exports = {
  pwa: {
    appleMobileWebAppCapable: 'yes',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      exclude: [/_redirects/],
    },
  },
};
