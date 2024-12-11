import { fakeRequestTickets } from "./fakeApi/tickets";

export const requestTickets = async () => {
  return await fakeRequestTickets(false); //если true - то выпадет ошибка
};
