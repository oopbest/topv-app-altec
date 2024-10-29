"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { PRODUCT_DEFAULT_PAGE, PRODUCT_PAGE_SIZE } from "@/const/product.const";
import { ProductDto } from "@/interface/dto/product.dto";
import ProductCard from "./product-card";
import RefreshToken from "./product-refresh";

type Props = {
  accessToken: string | undefined;
};

export default function ProductMore({ accessToken }: Props) {
  const [currentPage, setCurrentPage] = useState(PRODUCT_DEFAULT_PAGE + 1);
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleMore = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products?currentPage=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (res.status === 401) {
        return <RefreshToken />;
      }

      const newProducts: ProductDto[] = await res.json();
      setProducts((prev) => [...prev, ...newProducts]);
      setCurrentPage((prev) => prev + 1);
      setHasMore(newProducts.length === PRODUCT_PAGE_SIZE);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {hasMore && (
        <div className="col-span-2 flex w-full justify-center py-2 md:col-span-3">
          <button
            className="btn-primary border-none"
            onClick={handleMore}
            disabled={loading}
          >
            <div className="flex items-center">
              {loading ? "Loading..." : "ดูเพิ่มเติม"}
              <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
            </div>
          </button>
        </div>
      )}
    </>
  );
}
