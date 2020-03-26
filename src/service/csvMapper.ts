import { IGenericObject } from '@/type/types';

export const getIndexByString = (array: string[], text: string): number | undefined => {
  const row = array.find((string) => string.includes(text));
  return row ? array.indexOf(row) : undefined;
};

export const getBacklogSection = (csv: string[]): string[] | undefined => {
  const backlogRowIndex = getIndexByString(csv, 'Backlog');
  const todayRowIndex = getIndexByString(csv, 'Today');
  return backlogRowIndex !== undefined && todayRowIndex !== undefined
    ? csv.slice(backlogRowIndex, todayRowIndex)
    : undefined;
};

export const mapCSVtoObject = (csv: string): string | {[index: string]: IGenericObject } => {
  const csvAsArray = csv.split('\n');

  const backlogSection = getBacklogSection(csvAsArray);
  if (backlogSection) {
    const [title, headers, ...tickets] = backlogSection;
    const fields = headers.split(',').map((header) => header.trim());

    // Regex to only find commas outside of double quotes
    const regex = /(?!\B"[^"]*),(?![^"]*"\B)/g;

    return tickets.reduce((row, ticket) => {
      const ticketFields = ticket.split(regex);
      const itemID = ticketFields[fields.indexOf('Item ID')];
      if (itemID.trim()) {
        return {
          ...row,
          [itemID]: fields.reduce((acc, field, index) => ({
            ...acc,
            [field]: ticketFields[index],
          }), {}),
        };
      }
      return { ...row };
    }, {});
  }

  return {};
};
