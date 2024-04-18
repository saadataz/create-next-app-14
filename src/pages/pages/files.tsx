import { getDataAfterWait } from "@/lib/getDataAfterWait";
import { getFilesRecursively } from "@/lib/getFilesRecursively";
import type { InferGetServerSidePropsType } from "next";
import path from "path";

export const getServerSideProps = async () => {
  const files = getFilesRecursively(path.join(__dirname, "../../../.."));
  return { props: { files } };
};

export default function Page({
  files,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <h1>Server files</h1>
      <ul>
        {files.map((f, i) => (
          <li key={i}>{f.path},{f.size}</li>
        ))}
      </ul>
    </main>
  );
}
