export const kv = await Deno.openKv();

kv.listenQueue(console.log);
