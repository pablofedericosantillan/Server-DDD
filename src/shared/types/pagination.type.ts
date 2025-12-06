export type PaginationQuery = {
  limit: number;
  offset: number;
  count: boolean;
};

export type PaginationResult<T> = {
  entries: T[];
  limit: number;
  offset: number;
  totalCount: number | undefined;
};
