import { getDataAfterWait } from "@/lib/getDataAfterWait";
import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const data = await getDataAfterWait(500);
  return { props: { data } };
};

export default function Page({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <h1>SSR Page</h1>
      <p>Start Time: {new Date(data.startTime).toISOString()}</p>
      <p>Duration: {data.duration}</p>
    </main>
  );
}
