import * as index from '../src/index';

beforeEach(() => {
  process.argv = ['node', '.path/to/app.js', 'a=1', 'b=2'];
  jest.resetModules();
});

test('should export methods', () => {
  expect(index.script).toBeDefined();
  expect(index.has).toBeDefined();
  expect(index.get).toBeDefined();
});

test('should return executed script path', () => {
  expect(index.script()).toBe('.path/to/app.js');
});

test('should tell if parameters exists', () => {
  const { has } = require('../src/index');
  expect(has('a')).toEqual(true);
  expect(has('x')).toEqual(false);
});

test('should return  if parameters exists', () => {
  const { get } = require('../src/index');
  expect(get('a')).toEqual('1');
  expect(get('x')).toBeUndefined();
});
