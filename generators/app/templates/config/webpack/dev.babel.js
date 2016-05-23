import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import baseConf from './base.babel';

export default merge(baseConf, {
  devtool: 'source-map',
  debug: true,
  cache: true,
  module: {
    loaders: [{
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract('style', `css!sass?${['outputStyle=expanded'].join('&')}`)
    }]
  }
});
