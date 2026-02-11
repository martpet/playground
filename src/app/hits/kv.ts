import { ulid } from "@std/ulid";
import type { DenoKvGetOptions } from "../../lib/types.ts";
import { kv } from "../kv.ts";

const hitsKey = ["hits"];
const countKey = ["hits_count"];
const totalCountKey = ["hits_total_count"];

export interface Hit {
  id: string;
  position: number;
}

export function listHits(opt?: Deno.KvListOptions) {
  const iter = kv.list<Hit>({ prefix: hitsKey }, opt);
  return Array.fromAsync(iter, (entry) => entry.value);
}

export async function getHitsCount(opt?: DenoKvGetOptions) {
  const entry = await kv.get<bigint>(countKey, opt);
  return Number(entry.value);
}

export function deleteHit(id: string) {
  return kv.atomic()
    .delete([...hitsKey, id])
    .sum(countKey, 0xffffffffffffffffn)
    .commit();
}

export async function clearHits() {
  const iter = kv.list<Hit>({ prefix: hitsKey });
  for await (const entry of iter) await deleteHit(entry.value.id);
}

export async function createHit() {
  let done;
  while (!done) {
    const totalCountEntry = await kv.get(totalCountKey);
    const hit: Hit = {
      id: ulid(),
      position: Number(totalCountEntry.value) + 1,
    };
    const key = [...hitsKey, hit.id];
    const result = await kv.atomic()
      .set(key, hit)
      .check({ key, versionstamp: null })
      .check(totalCountEntry)
      .sum(countKey, 1n)
      .sum(totalCountKey, 1n)
      .enqueue(`Hit ${hit.position}`)
      .commit();
    done = result.ok;
  }
}
