import prod from './prod';
import dev from './dev';
const config = process.env.NODE_ENV === 'production' ? prod : dev;
export default config;
