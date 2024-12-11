import plural from "plural-ru";

export const getFormatTrahsfer = (number) => {
  return plural(number, "%d пересадка", "%d пересадки", "%d пересадок");
};
