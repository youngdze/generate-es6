import path from 'path';
import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';
import ProvidePlugin from 'webpack/lib/ProvidePlugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  target: 'web',
  context: path.join(__dirname, '../../'),
  entry: {
    'js/app': './src/app.js'
  },
  output: {
    path: path.join(__dirname, '../../build'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
      }
    }, {
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract('style', `css!sass?${['outputStyle=expanded'].join('&')}`)
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(.*)?$/,
      loader: 'file?name=fonts/[hash].[ext]'
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png"
    }]
  },
  plugins: [
    new ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new CommonsChunkPlugin('commons', 'js/commons.js'),
    new ExtractTextPlugin('css/style.css'),
    new CopyWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/tpl/index.ejs'
    })
  ]
};
