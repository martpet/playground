export const kv = await Deno.openKv();

kv.listenQueue(console.log);

export async function resetKv() {
  const iter = kv.list({ prefix: [] });
  for await (const entry of iter) await kv.delete(entry.key);
}
