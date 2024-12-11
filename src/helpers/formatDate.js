import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/ru";

dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);

dayjs.locale("ru");

export const formatDate = (dateString) => {
  const date = dayjs(dateString, "DD.MM.YY");

  if (!date.isValid()) {
    throw new Error("Неверный формат даты");
  }

  return date.format("DD MMM YYYY, ddd");
};
