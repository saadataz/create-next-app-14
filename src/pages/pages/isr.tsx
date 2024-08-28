import { revalidate } from "@/app/app/isr/page";
import { getDataAfterWait } from "@/lib/getDataAfterWait";
import type { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
  const res = await fetch("https://echo.free.beeceptor.com/", {
    next: {
      tags: ["pages/isr-echo"],
    },
  });

  const echoResponse = await res.json();

  const data = await getDataAfterWait(500);
  return { props: { data, echoResponse }, revalidate: 15 };
};

export default function Page({
  data,
  echoResponse,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
      <h1>ISR Page</h1>
      <p>Start Time: {new Date(data.startTime).toISOString()}</p>
      <p>Duration: {data.duration}</p>
      <p>
        Response from https://echo.free.beeceptor.com/{" "}
        {JSON.stringify(echoResponse, undefined, 2)}
      </p>
    </main>
  );
}
