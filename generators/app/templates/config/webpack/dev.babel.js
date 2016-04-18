import merge from 'webpack-merge';
import baseConf from './base.babel';

export default merge(baseConf, {
  devtool: 'source-map',
  debug: true,
  cache: true
});
