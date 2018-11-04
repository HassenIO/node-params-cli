import format from '../src/format';

test('should parse correctly when argv is key=value', () => {
  expect(format(['key=value'])).toEqual({
    key: 'value'
  });
});

test('should parse correctly when argv contains multiple key=value', () => {
  expect(format(['key1=value1', 'key2=value2', 'key3=value3'])).toEqual({
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  });
});

test('should parse correctly when argv has no values', () => {
  expect(format([])).toEqual({});
});

test('should parse correctly when argv is empty', () => {
  expect(format()).toEqual({});
});
