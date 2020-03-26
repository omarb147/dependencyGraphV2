import { correctCSV, incorrectCSV } from './csvMapperMock';
import {
  getIndexByString, getBacklogSection, mapCSVtoObject, formatHeader,
} from '../csvMapper';

describe('getIndexByString', () => {
  it('should return undefined if array is empty', () => {
    expect(getIndexByString([], 'Luffy')).toBeUndefined();
  });

  it('should return undefined if string is not in array', () => {
    expect(getIndexByString(['Edward Newgate', 'Gol D. Roger'], 'Luffy')).toBeUndefined();
  });

  it('should return the index if string is an exact match', () => {
    expect(getIndexByString(['Edward Newgate', 'Gol D. Roger', 'Luffy'], 'Luffy')).toEqual(2);
  });

  it('should return the index if string is a partial match', () => {
    expect(getIndexByString(['Edward Newgate', 'Gol D. Roger', 'Monkey D. Luffy'], 'Ro')).toEqual(1);
  });

  it('should return the index of the first string matched', () => {
    expect(getIndexByString(['Edward Newgate', 'Gol D. Roger', 'Monkey D. Luffy'], 'D')).toEqual(1);
  });
});

describe('getBacklogSection', () => {
  it('should return undefined if array is empty', () => {
    expect(getBacklogSection([])).toBeUndefined();
  });

  it('should return undefined if array only contains Backlog', () => {
    expect(getBacklogSection(['Backlog', 'Doing', 'Done'])).toBeUndefined();
  });

  it('should return undefined if array only contains Today', () => {
    expect(getBacklogSection(['Doing', 'Done', 'Today'])).toBeUndefined();
  });

  it('should return the elements between Backlog and Today, inlcuding Backlog', () => {
    expect(getBacklogSection(['Backlog', 'Doing', 'Done', 'Today'])).toEqual(['Backlog', 'Doing', 'Done']);
  });

  it('should return an empty array if Today is before Backlog', () => {
    expect(getBacklogSection(['Today', 'Doing', 'Done', 'Backlog'])).toEqual([]);
  });
});

describe('mapCSVtoObject', () => {
  it('should map the csv to an object when in the correct format', () => {
    expect(mapCSVtoObject(correctCSV)).toEqual({
      504135682: {
        Name: '"SPRINT GOAL: User story"',
        Labels: 'SprintGoal',
        Person: '',
        Points: '',
        'Priority Order': '',
        Status: 'Access Latest Survey',
        'Item ID': '504135682',
      },
      504135686: {
        Name: '"User story 1"',
        Labels: 'SprintGoal',
        Person: 'AW',
        Points: '2',
        'Priority Order': '1',
        Status: 'Access Latest Survey',
        'Item ID': '504135686',
      },
      504135687: {
        Name: '"User story 2"',
        Labels: '',
        Person: 'OB',
        Points: '3',
        'Priority Order': '2',
        Status: 'Create Repeat Survey',
        'Item ID': '504135687',
      },
      504779210: {
        Name: '"User story 3"',
        Labels: '',
        Person: '',
        Points: '4',
        'Priority Order': '3',
        Status: 'Create Repeat Survey',
        'Item ID': '504779210',
      },
    });
  });

  it('should return an empty object if the csv is in the incorrect format', () => {
    expect(mapCSVtoObject(incorrectCSV)).toEqual({});
  });
});

describe.only('formatHeader', () => {
  it('should format a normal string', () => {
    expect(formatHeader('UpperCamel')).toEqual('uppercamel');
  });

  it('should format a string that has extra spaces on either end', () => {
    expect(formatHeader(' withSpAcE  ')).toEqual('withspace');
  });

  it('should format a string with multiple words', () => {
    expect(formatHeader(' a unicorn flies  ')).toEqual('aUnicornFlies');
  });
});
