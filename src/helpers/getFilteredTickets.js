export const getFilteredTickets = (filters, tickets) => {
  const noFiltersEnabled = !(
    filters.noTransfers ||
    filters.oneTransfer ||
    filters.twoTransfers ||
    filters.threeOrMoreTransfers
  );

  if (noFiltersEnabled) {
    return tickets;
  }

  return tickets.filter((ticket) => {
    const { stops } = ticket;
    const noTransfers = filters.noTransfers && stops === 0;
    const oneTransfer = filters.oneTransfer && stops === 1;
    const twoTransfers = filters.twoTransfers && stops === 2;
    const threeOrMoreTransfers = filters.threeOrMoreTransfers && stops >= 3;

    return noTransfers || oneTransfer || twoTransfers || threeOrMoreTransfers;
  });
};
