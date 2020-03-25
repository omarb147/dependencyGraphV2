import { IGenericObject } from '@/type/types';

export const getIndexByString = (array: string[], text: string): number|undefined => {
  const row = array.find((string) => string.includes(text));
  return row ? array.indexOf(row) : undefined;
};


export const getBacklogTickets = (csv: string): string | {[index: string]: IGenericObject } => {
  try {
    const csvAsArray = csv.split('\n');
    const backlogRowIndex = getIndexByString(csvAsArray, 'Backlog');
    const todayRowIndex = getIndexByString(csvAsArray, 'Today');

    if (!backlogRowIndex || !todayRowIndex) {
      throw Error('Unable to find backlog section');
    }

    const backlogSection = csvAsArray.slice(backlogRowIndex, todayRowIndex);

    const [title, headers, ...tickets] = backlogSection;

    const fields = headers.split(',').map((header) => header.trim());

    // Regex to only find commas outside of double quotes
    const regex = /(?!\B"[^"]*),(?![^"]*"\B)/g;

    return tickets.reduce((row, ticket) => {
      const ticketFields = ticket.split(regex);
      return {
        ...row,
        [ticketFields[fields.indexOf('Item ID')]]: fields.reduce((acc, field, index) => ({
          ...acc,
          [field]: ticketFields[index],
        }), {}),
      };
    }, {});
  } catch (error) {
    return error.message;
  }
};
