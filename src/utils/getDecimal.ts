import roundNumberTo from 'utils/roundNumberTo';

const getDecimal = (number: number) => {
  if (number % 1 === 0) return 0;
  const [, decimalStr] = number.toString().split('.');
  if (number < 0) return roundNumberTo(number - Math.ceil(number), decimalStr.length);
  return roundNumberTo(number - Math.floor(number), decimalStr.length);
};

export default getDecimal;
