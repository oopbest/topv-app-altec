export const composeQueryParams = (params: (string | undefined)[]): string => {
    return params.filter((param) => param !== undefined).join("&");
};

export const getPageQuery = ({
    pageSize,
    currentPage,
    sortBy,
    sortDirection,
  }: {
    pageSize: number;
    currentPage: number;
    sortBy?: string;
    sortDirection?: string;
  }): string => {
    const queryPageSize = `searchCriteria[pageSize]=${pageSize}`;
    const queryCurrentPage = `searchCriteria[currentPage]=${currentPage}`;
    const querySortBy = sortBy
      ? `searchCriteria[sortOrders][0][field]=${sortBy}`
      : undefined;
    const querySortDirection = sortDirection
      ? `searchCriteria[sortOrders][0][direction]=${sortDirection}`
      : undefined;
    return composeQueryParams([
      queryPageSize,
      queryCurrentPage,
      querySortBy,
      querySortDirection,
    ]);
};

export const getFilterQuery = ({
  field,
  value,
  cond,
  layer,
}: {
  field: string;
  value: string;
  cond?: string;
  layer: number;
}): string => {
  const queryField = `searchCriteria[filterGroups][${layer}][filters][0][field]=${field}`;
  const queryValue = `searchCriteria[filterGroups][${layer}][filters][0][value]=${value}`;
  const queryCond = cond
    ? `searchCriteria[filterGroups][${layer}][filters][0][conditionType]=${cond}`
    : undefined;
  return composeQueryParams([queryField, queryValue, queryCond]);
};