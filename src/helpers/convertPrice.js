export const currencyRates = {
  USD: 1,
  EUR: 0.85,
  RUB: 75,
};
export const convertPrice = (currency, price, fromCurrency) => {
  const rate = currencyRates[currency] / currencyRates[fromCurrency];
  return (price * rate).toFixed(2);
};
