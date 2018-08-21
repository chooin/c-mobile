import config from './rollup.common.config'
import { uglify } from 'rollup-plugin-uglify';

config.plugins = config.plugins.concat(uglify());

export default config;
