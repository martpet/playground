import { ulid } from "@std/ulid";
import { kv } from "../kv.ts";

export interface Hit {
  id: string;
}

const KEY = "hit";

export function listHits(opt?: Deno.KvListOptions) {
  const iter = kv.list({ prefix: [KEY] }, opt);
  return Array.fromAsync(iter, (entry) => entry.value);
}

export function createHit() {
  const id = ulid();
  const hit: Hit = { id };
  return kv.atomic()
    .set([KEY, id], hit)
    .enqueue("New hit!")
    .commit();
}
