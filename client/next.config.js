//help to run files automatically oncey every 300ms to make sure the client update each time a file is saved
module.exports = {
  webPackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
};
