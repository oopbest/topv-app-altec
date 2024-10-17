import { NextResponse } from "next/server";
import { ProductDisplayConfig } from "@/interface/product-filter.interface";
import {
  PRODUCT_DEFAULT_PAGE,
  PRODUCT_DEFAULT_SORT_BY,
  PRODUCT_PAGE_SIZE,
} from "@/const/product.const";
import {
  composeQueryParams,
  getPageQuery,
  getFilterQuery,
} from "@utils/query.util";

// API handler for fetching products
export async function GET(request: Request) {
  const accessToken = request.headers
    .get("Authorization")
    ?.replace("Bearer ", "");

  if (!accessToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const brandId = String(process.env.NEXT_PUBLIC_DEFAULT_CATEGORY_ID);
  const productDisplayConfig: ProductDisplayConfig = {
    pageSize: PRODUCT_PAGE_SIZE,
    currentPage: PRODUCT_DEFAULT_PAGE,
    sortBy: PRODUCT_DEFAULT_SORT_BY,
    sortDirection: "ASC",
  };

  let query: string | undefined = undefined;
  if (brandId) {
    const queryCat = getFilterQuery({
      field: "brand",
      value: brandId.toString(),
      layer: 3,
      cond: "in",
    });
    const { pageSize, currentPage, sortBy, sortDirection } =
      productDisplayConfig;
    const queryPage = getPageQuery({
      pageSize: pageSize,
      currentPage: currentPage,
      sortBy: sortBy,
      sortDirection: sortDirection,
    });

    query = composeQueryParams([queryCat, queryPage]);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_CALL_URL}/nextapi/products?${query}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );

  if (res.status === 401) {
    console.log("Please Reset cookie");
  }

  if (!res.ok) {
    return NextResponse.json(
      { message: "Error fetching products" },
      { status: res.status },
    );
  }

  const products = await res.json();
  return NextResponse.json(products.items);
}
