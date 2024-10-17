import type { Metadata } from "next";
import ProductCard from "@/components/products/product-card";
import { ProductDto } from "@/interface/dto/product.dto";
import { Suspense } from "react";
import LoadingProductCard from "./loading";
import { cookies } from "next/headers";
import ButtonRefreshToken from "@/components/products/product-refresh";

export const metadata: Metadata = {
  title: "Products",
};

export default async function ProductPage() {
  // await new Promise((resolve) => setTimeout(resolve, 1000000));
  // Get product in route hanler
  const accessToken = cookies().get("ACCESS_TOKEN")?.value;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const products: ProductDto[] = await res.json();

  return (
    <section className="bg-theme-container">
      <Suspense fallback={<LoadingProductCard />}>
        {products && products.length > 0 ? (
          <div className="container mx-auto grid grid-cols-2 gap-3 p-4 md:grid-cols-3">
            {products.map((product: ProductDto) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex h-screen w-full flex-col items-center justify-center space-y-4 bg-gray-100">
            <div className="text-center *:my-3">
              <h2 className="text-5xl font-thin">Sorry, No Product Found.</h2>
              <p>Could not find Access token</p>
            </div>
            <ButtonRefreshToken />
          </div>
        )}
      </Suspense>
    </section>
  );
}
