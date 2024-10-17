import { Metadata } from "next";
import { Suspense } from "react";
import LoadingProductDetail from "./loading";
import ProductInfo from "@/components/products/product-info";
import ProductCarousel from "@/components/products/product-carousel";
import ProductDescription from "@/components/products/product-description";

type Props = {
  params: { pkey: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Products ${params.pkey}`);
    }, 100);
  });
  return {
    title: `${title}`,
  };
};

export default async function ProductDetailPage({ params }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product-detail?pkey=${params.pkey}`, // ส่ง pkey ใน query string
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const product = await res.json();
  // console.log("Data Detail:", product.description);

  return (
    <Suspense fallback={<LoadingProductDetail />}>
      <section className="block bg-theme-container p-3">
        <main className="container mx-auto block pb-16">
          {/* <!-- Info --> */}
          <div className="transition-responsive rounded-lg bg-white p-4">
            <div className="transition-responsive grid grid-cols-1 lg:grid-cols-5 lg:space-x-4">
              <div className="col-span-2">
                <ProductCarousel images={product.media} />
              </div>
              <div className="col-span-3">
                <ProductInfo product={product} urlKey={params.pkey} />
              </div>
            </div>

            {/* <!-- Description --> */}
            <div className="py-5">
              <div className="rounded-lg lg:border lg:p-5">
                <ProductDescription description={product.description} />
              </div>
            </div>
          </div>
        </main>
      </section>
    </Suspense>
  );
}