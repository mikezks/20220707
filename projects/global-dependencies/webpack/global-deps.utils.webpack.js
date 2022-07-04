module.exports = {
  getWebpackExternals: function (deps) {
    return deps.reduce((acc, cur) => {
      acc[cur] = `root myCompanyNamespace.globalDeps['${ cur }']`;
      return acc;
    }, {});
  }
};
