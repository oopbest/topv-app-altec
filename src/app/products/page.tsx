import type { Metadata } from "next";
import ProductCard from "@/components/products/product-card";
import { ProductDto } from "@/interface/dto/product.dto";
import { Suspense } from "react";
import LoadingProductCard from "./loading";
import { cookies } from "next/headers";
import RefreshToken from "@/components/products/product-refresh";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Products",
};

export default async function ProductPage() {
  // Get Access Token From Cookies
  const accessToken = cookies().get("ACCESS_TOKEN")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  // 401 Unauthorized Refresh Token
  if (res.status === 401) {
    return <RefreshToken />;
  }

  const products: ProductDto[] = await res.json();

  return (
    <Suspense fallback={<LoadingProductCard />}>
      {products && products.length > 0 ? (
        <div className="container mx-auto grid grid-cols-2 gap-3 bg-theme-container p-4 md:grid-cols-3">
          {products.map((product: ProductDto) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="m-5 w-full bg-slate-50 py-40 text-center *:my-3">
          <h3 className="font-thin">Sorry, No Product Found.</h3>
          <p>
            <small>Could not find requested resource</small>
          </p>
          <button className="btn-primary group border-none bg-primary text-white">
            <Link href="/" className="flex">
              Home Page
              <FontAwesomeIcon
                icon={faAngleRight}
                className="my-auto ml-2 group-hover:translate-x-1"
              />
            </Link>
          </button>
        </div>
      )}
    </Suspense>
  );
}
