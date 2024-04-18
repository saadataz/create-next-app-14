export async function getDataAfterWait(waitTimeMs: number) {
  const startTime = Date.now();
  await new Promise((res) => setTimeout(res, waitTimeMs));
  const duration = Date.now() - startTime;

  return { startTime, duration };
}
