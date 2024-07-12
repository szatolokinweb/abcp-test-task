const LIMIT = 10;

export const generateId = (limit: number = LIMIT): number => {
  return Math.floor(Math.random() * limit) + 1;
};
