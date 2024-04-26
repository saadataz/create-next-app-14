import SsgPage from "../ssg/page";
import SsrPage from "../ssr/page";
import IsrPage from "../isr/page";

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Page Router: Mixed Page</h1>
      <div>This page contains both static and dynamic components</div>
      <div>The page itself is SSG</div>
      <div className="flex flex-row">
        <div className="border border-indigo-600">
          <SsgPage />
        </div>
        <div className="border border-indigo-600">
          <SsrPage />
        </div>
        <div className="border border-indigo-600">
          <IsrPage />
        </div>
      </div>
    </main>
  );
}
