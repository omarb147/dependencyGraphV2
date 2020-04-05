import {
  ITicket, IHeadingMap, Headings, IHeader,
} from '@/type/types';

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

// Works for most strings
export const toCamelCase = (text: string): string => text.trim()
  .replace(/(\W+)|(\s)/g, ' ')
  .toLowerCase()
  .replace(/\b[a-zA-Z]/g, (letter, index) => (index > 0 ? letter.toUpperCase() : letter))
  .replace(/\s+/g, '');


interface IAllNodes {
  tickets: ITicket[];
  headers: IHeader[];
}

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
          if (headers[index] === 'Status' && !epics.includes(val)) epics.push(val);
          return {
            ...acc,
            [headingMap[headers[index]]]: headers[index] === 'Name' ? formatUserStory(val.trim()) : val,
          };
        }
        return acc;
      }, {});
    }) as ITicket[];

    const formattedEpics: IHeader[] = epics.map((epic) => ({
      name: epic,
      color: 'green',
      id: toCamelCase(epic),
    }));

    return {
      tickets: formattedTickets,
      headers: formattedEpics,
    };
  }
  return undefined;
};
