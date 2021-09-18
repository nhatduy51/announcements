export const paginate = (page?: number | string, limit?: number | string) => {
  const offset = page && limit ? (+page - 1) * +limit : undefined;

  return {
    offset,
    limit: limit && Number(limit),
  };
};
