export interface ProductAttributeFilter {
  display: string;
  value: number;
  count: number;
}

export type ProductSortBy = "position" | "price_desc" | "price_asc" | "name" | "random" | "find_in_set" | "created_at";

export type ProductSort = "ASC" | "DESC";

export interface ProductDisplayConfig {
    pageSize: number;
    currentPage: number;
    sortBy?: string;
    sortDirection?: ProductSort;
}

export interface DropdownOption {
    value: string | number;
    label: string;
    desc?: string; 
}
  