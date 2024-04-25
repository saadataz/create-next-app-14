import { getDataAfterWait } from "../../../lib/getDataAfterWait";

export default async function Page() {
  const { startTime, duration } = await getDataAfterWait(500);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Page Router: ISR Page</h1>
      <div>
        This page is always revalidated every 10 seconds due to <code>revalidate = 10</code>
      </div>
      <div>
        <p>startTime: {startTime}</p>
        <p>duration: {duration}</p>
        <p>Page generated on {new Date().toISOString()}</p>
      </div>
    </main>
  );
}

export const revalidate = 10;
