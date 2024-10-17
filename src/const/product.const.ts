import { DropdownOption, ProductSortBy } from "@/interface/product-filter.interface";
import noImage from "@images/Altec_img.jpg";

// product display filter
export const PRODUCT_DEFAULT_SORT_BY: ProductSortBy = "name";
export const PRODUCT_SORT_LIST: DropdownOption[] = [
  { value: "name", label: "ชื่อ" },
  { value: "position", label: "ตำแหน่ง" },
  { value: "price_desc", label: "ราคา สูง - ต่ำ", desc: "DESC" },
  { value: "price_asc", label: "ราคา ต่ำ - สูง", desc: "ASC" },
];

// product random display
export const PRODUCT_RANDOM_SORT_BY: ProductSortBy = "random";

// product paging
export const PRODUCT_DEFAULT_PAGE = 1;
export const PRODUCT_PAGE_SIZE = 16;

// product images
export const PRODUCT_NOT_FOUND_IMG = noImage;
