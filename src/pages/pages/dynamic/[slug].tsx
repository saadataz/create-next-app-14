import { getDataAfterWait } from "@/lib/getDataAfterWait";
import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const data = await getDataAfterWait(500);
  return { props: { data } };
};

export const getStaticPaths = async () => {
  return {
    paths: ["/pages/dynamic/foo", "/pages/dynamic/bar"],
    fallback: "blocking",
  };
};

export default function Page({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  return (
    <main>
      <h1>SSG Dynamic Page</h1>
      <p>Start Time: {new Date(data.startTime).toISOString()}</p>
      <p>Duration: {data.duration}</p>
      <p>Route Slug: {router.query.slug}</p>
    </main>
  );
}
