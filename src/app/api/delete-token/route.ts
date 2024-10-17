import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET() {
  const cookieStore = cookies();
  cookieStore.delete("ACCESS_TOKEN");

  return new Response("deleted");
}
