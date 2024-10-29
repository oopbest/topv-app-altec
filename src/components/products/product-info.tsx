import ProductRating from "@/components/products/product-rating";
import { FormatThaiBaht } from "@/utils/format-currency";
import Image from "next/image";
import imgTopv from "@images/shop-topvalue.svg";
// import imgShopee from "@images/shop-shopee.svg";
// import imgLazada from "@images/shop-lazada.svg";
// import imgJd from "@images/shop-jd.svg";
import { ProductDetailDto } from "@/interface/dto/product-detail.dto";

type Props = {
  urlKey: string;
  product: ProductDetailDto;
};

export default async function ProductInfo({ urlKey, product }: Props) {
  const rating = product.review[0].star_rating;

  return (
    <div className="divide-y *:py-7">
      {/* !-- info --> */}
      <div className="space-y-1">
        <h4>{product.name}</h4>
        <div className="flex items-center divide-x *:px-2">
          
            <ProductRating rating={rating} />
          <p>{rating}</p>
          <div>
            <small className="rounded-md bg-slate-100 p-1 text-gray-500">
              SKU: <span>{product.sku}</span>
            </small>
          </div>
        </div>
      </div>

      {/* !-- Price --> */}
      <div>
        <h3 className="rounded-lg bg-slate-100 py-[10%] text-center text-primary">
          <FormatThaiBaht amount={product.price} />
        </h3>
      </div>

      {/* <!-- Online --> */}
      <div className="transition-responsive container mx-auto">
        <b>ตัวแทนจำหน่าย</b>
        {/* <div className="grid grid-cols-2 justify-center gap-2 p-3 md:grid-cols-4"> */}
        <div className="flex justify-center">
          <a
            className="transition hover:-translate-y-0.5"
            href={`${process.env.NEXT_PUBLIC_TOPVALUE_URL}/${urlKey}`}
            target="_blank"
          >
            <Image
              className="rounded-lg border bg-white w-48"
              src={imgTopv}
              alt="shop-topvalue"
            />
          </a>
          {/* <a
            className="transition hover:-translate-y-1"
            href="https://shopee.co.th/altec_officialth"
            target="_blank"
          >
            <Image
              className="rounded-lg border bg-white"
              src={imgShopee}
              alt="shop-shopee"
            />
          </a>
          <a
            className="transition hover:-translate-y-1"
            href="https://www.lazada.co.th/shop/alectric-officialstore/"
          >
            <Image
              className="rounded-lg border bg-white"
              src={imgLazada}
              alt="shop-topvalue"
            />
          </a>
          <a className="transition hover:-translate-y-1" href="#">
            <Image
              className="rounded-lg border bg-white"
              src={imgJd}
              alt="shop-topvalue"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
}
