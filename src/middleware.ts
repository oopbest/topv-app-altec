import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("ACCESS_TOKEN")?.value;

  // Check Access Token
  if (!accessToken) {
    const responseToken = await fetch(
      `${process.env.NEXT_PUBLIC_API_CALL_URL}/integration/admin/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: process.env.API_USERNAME,
          password: process.env.API_PASSWORD,
        }),
      },
    );
    if (responseToken.ok) {
      const newAccessToken = await responseToken.json();
      // Set the new access token in cookies
      const res = NextResponse.next();
      res.cookies.set("ACCESS_TOKEN", newAccessToken, {
        httpOnly: true,
        secure: true,
      });
      return res;
    }
  }

  // Continue to the next middleware or request handler
  return NextResponse.next();
}

// Apply middleware only on /products route
export const config = {
  matcher: "/products",
};
