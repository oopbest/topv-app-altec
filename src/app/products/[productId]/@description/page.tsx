import { Suspense } from "react";
import LoadingProductDescription from "./loading";
import { fetchProductDetail } from "../../api/fetch";
import Image from "next/image";
import imgProductinfo1 from "@images/img-product-info1.jpg";
import imgProductinfo2 from "@images/img-product-info2.jpg";
import imgProductinfo3 from "@images/img-product-info3.jpg";
import imgProductinfo4 from "@images/img-product-info4.jpg";

type Props = {
  params: { productId: string };
};

export default async function Description({ params }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  // throw new Error("Failed to load the product description!");
  const product = await fetchProductDetail(params.productId);
  return (
    <>
      <Suspense fallback={<LoadingProductDescription />}>
        {product.description ? (
          <>
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
            <div className="flex flex-col items-center gap-4">
              <Image
                width={800}
                height={800}
                src={imgProductinfo4}
                alt=""
                className="max-w-full"
              />
              <Image
                width={800}
                height={800}
                src={imgProductinfo2}
                alt=""
                className="max-w-full"
              />
              <Image
                width={800}
                height={800}
                src={imgProductinfo3}
                alt=""
                className="max-w-full"
              />
              <Image
                width={800}
                height={800}
                src={imgProductinfo1}
                alt=""
                className="max-w-full"
              />
            </div>
          </>
        ) : (
          <p>No description available for this product.</p>
        )}
      </Suspense>
    </>
  );
}
