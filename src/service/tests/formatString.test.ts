import { toCamelCase } from '../formatString';

describe('toCamelCase', () => {
  it('should convert string to camel case', () => {
    expect(toCamelCase('  Came/?l  case  ')).toEqual('cameLCase');
    expect(toCamelCase('camel case')).toEqual('camelCase');
    expect(toCamelCase('Camel case')).toEqual('camelCase');
    expect(toCamelCase('  Camel  case  ')).toEqual('camelCase');
  });
});
