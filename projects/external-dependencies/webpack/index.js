module.exports = {
  deps: require('./global-deps.define.webpack').deps,
  getWebpackExternals: require('./global-deps.utils.webpack').getWebpackExternals
};
