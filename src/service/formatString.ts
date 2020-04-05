export const toCamelCase = (text: string): string => text.trim()
  .replace(/(\W+)|(\s)/g, ' ')
  .toLowerCase()
  .replace(/\b[a-zA-Z]/g, (letter, index) => (index > 0 ? letter.toUpperCase() : letter))
  .replace(/\s+/g, '');
