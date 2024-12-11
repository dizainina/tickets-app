export const getCurrencySymbol = (currency) => {
  if (currency === "USD") {
    return "$";
  }
  if (currency === "EUR") {
    return "€";
  }
  return "₽";
};
