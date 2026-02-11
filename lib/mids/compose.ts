import type { Handler, Middleware } from "../types.ts";

export function compose(mids: Middleware[], handler: Handler) {
  return mids.reduceRight((next, mid) => mid(next), handler);
}
