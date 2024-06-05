import { getDataAfterWait } from "@/lib/getDataAfterWait";
import type { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
  const data = await getDataAfterWait(500);
  return { props: { data } };
};

export default function Page({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
      <h1>404 Page</h1>
      <p>Start Time: {new Date(data.startTime).toISOString()}</p>
      <p>Duration: {data.duration}</p>
    </main>
  );
}
