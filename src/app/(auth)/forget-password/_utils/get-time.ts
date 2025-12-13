/**
 * getTime function get key and check it in session storage if not found return null else return date milliseconds
 * @param key 
 * @returns data.getTime() || null
 */
export const getTime = (key: string) => {
  const value = sessionStorage.getItem(key);

  if (!value) return null;

  const date = new Date(value);

  return isNaN(date.getTime()) ? null : date.getTime();
};
