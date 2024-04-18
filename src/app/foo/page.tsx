import { getDataAfterWait } from "../../lib/getDataAfterWait";

export default async function Page() {
  const { startTime, duration } = await getDataAfterWait(500);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Foo Page</h1>
      <p>startTime: {startTime}</p>
      <p>duration: {duration}</p>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Page generated on {new Date().toISOString()}
      </div>
    </main>
  );
}
