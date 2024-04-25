import { getDataAfterWait } from "@/lib/getDataAfterWait";

export async function GET() {
  const data = await getDataAfterWait(500);

  return Response.json({ data });
}
