import format from './format';

const params = format(process.argv);

export const script = () => process.argv[1];
export const has = key => !!params[key];
export const get = key => params[key];
