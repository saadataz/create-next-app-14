import { getDataAfterWait } from "@/lib/getDataAfterWait";
import type { InferGetServerSidePropsType } from "next";
import Link from "next/link";

export const getServerSideProps = async () => {
  const data = await getDataAfterWait(500);
  return { props: { data } };
};

export default function Page({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>SSR Home Page</h1>
        <p>Start Time: {new Date(data.startTime).toISOString()}</p>
        <p>Duration: {data.duration}</p>
      </main>
    </>
  );
}

function NavBar() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/pages/files">Pages/files</Link>
      </li>
      <li>
        <Link href="/pages/ssg">Pages/SSG</Link>
      </li>
      <li>
        <Link href="/pages/ssr">Pages/SSR</Link>
      </li>
      <li>
        <Link href="/app/api">App/API</Link>
      </li>
      <li>
        <Link href="/app/isr">App/ISR</Link>
      </li>
      <li>
        <Link href="/app/mixed">App/Mixed</Link>
      </li>
      <li>
        <Link href="/app/ssg">App/SSG</Link>
      </li>
      <li>
        <Link href="/app/ssr">App/SSR</Link>
      </li>
    </ul>
  );
}
