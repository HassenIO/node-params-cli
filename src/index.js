import parser from './parser';

const params = parser(process.argv);

export const script = () => process.argv[1];
export const has = key => !!params[key];
export const get = key => params[key];
