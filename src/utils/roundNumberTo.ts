const roundNumberTo = (num: number, to: number): number => {
  const result = Math.round(num * Math.pow(10, to)) / Math.pow(10, to);
  if (result === -0) return 0;
  return result;
};
export default roundNumberTo;
