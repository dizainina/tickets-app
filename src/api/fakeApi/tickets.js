import ticketsData from "../../data/tickets.json";

export const fakeRequestTickets = (isError) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError) reject(new Error("some error in request to tickets"));
      const results = ticketsData;
      if (!results) {
        reject(new Error("Tickets not found!"));
        return null;
      }
      resolve(results);
    }, 200);
  });
};
