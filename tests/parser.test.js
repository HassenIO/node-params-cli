import parser from '../src/parser';

test('should parse correctly when argv is key=value', () => {
  expect(parser(['key=value'])).toEqual({
    key: 'value'
  });
});

test('should parse correctly when argv contains multiple key=value', () => {
  expect(parser(['key1=value1', 'key2=value2', 'key3=value3'])).toEqual({
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  });
});

test('should parse correctly when argv has no values', () => {
  expect(parser([])).toEqual({});
});

test('should parse correctly when argv is empty', () => {
  expect(parser()).toEqual({});
});
