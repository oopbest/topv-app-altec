import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pkey = searchParams.get("pkey");
  const resKey = await fetch(
    `${process.env.NEXT_PUBLIC_API_CALL_URL}/nextapi/type?urlKey=${pkey}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );

  const dataKey = await resKey.json();
  const productId = dataKey[0].id;

  const resDetail = await fetch(
    `${process.env.NEXT_PUBLIC_API_CALL_URL}/nextapi/products/${productId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );

  const dataDetail = await resDetail.json();
//   console.log("dataDetail",dataDetail)

  return NextResponse.json(dataDetail[0]);
}
