import merge from 'webpack-merge';
import UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import baseConf from './base.babel';

export default merge(baseConf, {
  module: {
    loaders: [{
      test: /\.s?css$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract('style', `css!sass?${['outputStyle=compressed'].join('&')}`)
    }]
  },
  plugins: [
    new UglifyJsPlugin({warnings: false}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/tpl/index.ejs',
      minify: {collapseWhitespace: true, removeComments: true}
    })
  ]
});
