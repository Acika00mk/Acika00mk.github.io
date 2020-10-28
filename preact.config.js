export default (config, env, helpers) => {
  delete config.entry.polyfills;
  config.output.filename = "[name].js";

  helpers.getLoadersByName(config,
      'css-loader')[0].loader.options.modules = false;

  let { plugin } = helpers.getPluginsByName(config, "ExtractTextPlugin")[0];
  plugin.options.disable = true;

  if (env.production) {
    config.output.libraryTarget = "umd";
  }
};
