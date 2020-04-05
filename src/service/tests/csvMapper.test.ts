import exampleMondayCSV from './csvMapperMock';
import {
  mapCSVtoObject,
  formatUserStory,
  getHeadersIndex,
} from '../csvMapper';

describe('mapCSVtoObject', () => {
  it('should return an array of row objects - Full version', () => {
    expect(mapCSVtoObject(exampleMondayCSV)).toMatchSnapshot();
  });
  it('should return an array of row objects - Simplified version', () => {
    const simpleCSV = `Prod PR template: Production Deploy YYYY-MM-DD {NUM_DEPLOY_TODAY}",,,,,,,
    ,,,,,,,
    "Phase 3, Sprint 1: AACKU, on the home page, when I click on my contact database button, I am taken to the contact database of the latest survey",,,,,,,
    Name,Status,Labels,Points,Person,Item ID,Priority Order,Item ID (auto generated)
    "SPRINT GOAL: AACKU, on the home page, when I click on my contact database button, I am taken to the contact database of the latest survey",Access Latest Survey,SprintGoal,,,504135682,,504135682
    "(2) - AACKUser on the home page, when there are no surveys in an organisation, the button ""My Contact Database"" is disabled",Access Latest Survey,SprintGoal,2,,505730979,,505730979
    "[TIMEBOX 1/2day*1dev] AACRC/CKUser on the CDB page, I can see a dropdown for the CC/PC/I and status column for existing surveys and surveys created with existing products (e.g. TRR product)",Go Live Support,SprintReady,,Rob Cronin,507017759,,507017759
    Coaching Elio<>Mike,Coaching,SprintTemplate,,,507679478,,507679478
    `;
    expect(mapCSVtoObject(simpleCSV)).toMatchObject({
      tickets: [
        {
          itemId: '504135682',
          name: 'SPRINT GOAL: AACKU, on the home page, when I click on my contact database button, I am taken to the contact database of the latest survey',
          labels: 'SprintGoal',
          person: '',
          points: '',
          status: 'Access Latest Survey',
        },
        {
          itemId: '505730979',
          name: 'AACKUser on the home page, when there are no surveys in an organisation, the button "My Contact Database" is disabled',
          labels: 'SprintGoal',
          person: '',
          points: '2',
          status: 'Access Latest Survey',
        },
        {
          itemId: '507017759',
          labels: 'SprintReady',
          person: 'Rob Cronin',
          name: '[TIMEBOX 1/2day*1dev] AACRC/CKUser on the CDB page, I can see a dropdown for the CC/PC/I and status column for existing surveys and surveys created with existing products (e.g. TRR product)',
          points: '',
          status: 'Go Live Support',
        },
        {
          itemId: '507679478',
          labels: 'SprintTemplate',
          person: '',
          points: '',
          name: 'Coaching Elio<>Mike',
          status: 'Coaching',
        },
      ],
      headers: [
        {
          color: 'green',
          id: 'accessLatestSurvey',
          name: 'Access Latest Survey',
        },
        {
          color: 'green',
          id: 'goLiveSupport',
          name: 'Go Live Support',
        },
        {
          color: 'green',
          id: 'coaching',
          name: 'Coaching',
        },
      ],
    });
  });
});

describe('formatUserStory', () => {
  it('should return user story without point and quotation mark', () => {
    const text = '"(2) - AACKUser on the home page, when there are no surveys in an organisation, the button ""My Contact Database"" is disabled';
    expect(formatUserStory(text)).toEqual('AACKUser on the home page, when there are no surveys in an organisation, the button "My Contact Database" is disabled');
  });

  it('should return user story with square bracket but without the quotation marks', () => {
    const text = '"[TIMEBOX 1/2day*1dev] AACRC/CKUser on the CDB page, I can see a dropdown for the CC/PC/I and status column for existing surveys and surveys created with existing products (e.g. TRR product)"';
    expect(formatUserStory(text)).toEqual('[TIMEBOX 1/2day*1dev] AACRC/CKUser on the CDB page, I can see a dropdown for the CC/PC/I and status column for existing surveys and surveys created with existing products (e.g. TRR product)');
  });

  it('should return user story as is if already formatted correctly', () => {
    const text = 'Coaching Roblex';
    expect(formatUserStory(text)).toEqual('Coaching Roblex');
  });
});

describe('getHeadersIndex', () => {
  it('should return the index of the header row in the csv', () => {
    const csv = exampleMondayCSV.split('\n');
    expect(getHeadersIndex(csv)).toEqual(5);
    expect(csv[5]).toEqual(expect.stringMatching('Name'));
    expect(csv[5]).toEqual(expect.stringMatching('Status'));
    expect(csv[5]).toEqual(expect.stringMatching('Label'));
    expect(csv[5]).toEqual(expect.stringMatching('Points'));
    expect(csv[5]).toEqual(expect.stringMatching('Item ID'));
    expect(csv[5]).toEqual(expect.stringMatching('Priority Order'));
  });
  it('should return undefined if it cannot find the header row in the csv', () => {
    expect(getHeadersIndex([])).toEqual(undefined);
  });
});
