export const addIdsToItems = (data) => {
  const itemsWithId = data.map((item, index) => ({
    id: index + 1,
    ...item,
  }));
  return itemsWithId;
};
