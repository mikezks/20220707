const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const globalDeps = require("../external-dependencies/webpack");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "modules",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  externals: globalDeps.getWebpackExternals(globalDeps.deps),
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },
        name: "modules",
        filename: "remoteEntry.js",
        exposes: {
            './container': './projects/modules-app/src/app/modules-container/modules-container.module.ts',
        },
        shared: share({
          // '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          // '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
