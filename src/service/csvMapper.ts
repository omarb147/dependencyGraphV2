import {
  ITicket, IHeadingMap, Headings, IHeader, IHeaderColor, IAllNodes,
} from '@/type/types';
import colorList from '@/assets/color';
import { toCamelCase } from './formatString';

export const getHeadersIndex = (csv: string[]): number | undefined => {
  // Looks specifically for a row with these headers
  const headers = ['Name', 'Status', 'Labels', 'Points', 'Item ID'];
  let headerIndex: number | null = null;

  // Look for the row with the header
  for (let i = 0; i < csv.length; i += 1) {
    const row = csv[i];
    if (headers.every((header) => row.includes(header))) {
      headerIndex = i;
      break;
    }
  }

  return headerIndex ?? undefined;
};

const headingMap: IHeadingMap = {
  Name: 'name',
  Status: 'status',
  Labels: 'labels',
  Points: 'points',
  Person: 'person',
  'Item ID': 'itemId',
  'Priotiry Order': 'priorityOrder',
};

export const formatUserStory = (userStory: string): string => {
  // Match first letter or bracket
  const regex = /(\[|[a-zA-Z])/;

  const updatedUserStory = userStory.replace(/""/g, '"');

  if (updatedUserStory[updatedUserStory.length - 1] === '"') {
    return updatedUserStory.slice(updatedUserStory.search(regex), updatedUserStory.length - 1);
  }

  return updatedUserStory.slice(updatedUserStory.search(regex), updatedUserStory.length);
};

const formatEpics = (epics: string[]): {formattedEpics: IHeader[]; colors: IHeaderColor} => {
  let count = 0;
  const colors: IHeaderColor = {};
  const formattedEpics = epics.map((epic) => {
    if (count >= colorList.length) count = 0;
    const color = colorList[count];
    count += 1;
    colors[epic] = color;
    return {
      name: epic,
      color,
      id: toCamelCase(epic),
    };
  });

  return { formattedEpics, colors };
};

export const mapCSVtoObject = (csv: string): IAllNodes | undefined => {
  const csvArray = csv.split('\n');

  const headerRowIndex = getHeadersIndex(csvArray);

  // matches commas outside of double quotes
  const regex = /,(?=(?:[^"]*"[^"]*")*[^"]*$)/gm;

  if (headerRowIndex) {
    const tickets = csvArray.slice(headerRowIndex + 1, csvArray.length - 1);
    const headers = csvArray[headerRowIndex].split(regex).map((header) => header.trim()) as Headings[];
    const epics: string[] = [];
    const formattedTickets = tickets.map((ticket) => {
      const ticketInfo = ticket.split(regex);
      return ticketInfo.reduce((acc, val, index) => {
        if (headingMap[headers[index]]) {
          const trimmedValue = val.trim();
          if (headers[index] === 'Status' && !epics.includes(trimmedValue)) epics.push(trimmedValue);
          return {
            ...acc,
            [headingMap[headers[index]]]: headers[index] === 'Name' ? formatUserStory(val) : trimmedValue,
          };
        }
        return acc;
      }, {});
    }) as ITicket[];

    const { formattedEpics, colors } = formatEpics(epics);

    return {
      tickets: formattedTickets,
      headers: formattedEpics,
      colors,
    };
  }
  return undefined;
};
