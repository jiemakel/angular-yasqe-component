const path = require("path");
const webpack = require("webpack");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");

module.exports = {
  entry: {
    "yasqe-component": path.join(__dirname, './src/yasqe-component.ts'),
    "yasqe-component.min": path.join(__dirname, './src/yasqe-component.ts')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    library: 'yasqe-component',
    libraryTarget: 'umd'
  },
  devtool: "source-map",
  module: {
    rules: [ {
	    test: /\.ts$/,
	    use: [ 'ng-annotate-loader', 'ts-loader' ]
    } ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  externals: {
    angular: 'angular',
    'yasgui-yasqe': { amd: 'yasgui-yasqe', root: 'YASQE', commonjs: 'yasgui-yasqe', commonjs2: 'yasgui-yasqe' }
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "yasqe-component Webpack Build"
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
