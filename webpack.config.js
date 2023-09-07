const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "https://localhost:4200",
    uniqueName: "layout"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        "@angular/common": { singleton: true, requiredVersion: false },
        "@angular/common/http": { singleton: true, requiredVersion: false },
        "@angular/compiler": { singleton: true, requiredVersion: false },
        "@angular/core": { singleton: true, requiredVersion: false },
        "@angular/forms": { singleton: true, requiredVersion: false },
        "@angular/platform-browser": {
          singleton: true,
          requiredVersion: false
        },
        "@angular/platform-browser-dynamic": {
          singleton: true,
          requiredVersion: false
        },
        "@angular/router": { singleton: true, requiredVersion: false },
        "rxjs": { singleton: true, requiredVersion: false },
        "rxjs/operators": { singleton: true, requiredVersion: false }
      }
    })
  ]
};
