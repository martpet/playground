import type { Middleware } from "../types.ts";

export const cacheMid: Middleware = (next) => async (req) => {
  const match = await caches.match(req);

  if (match) {
    match.headers.set("x-cache", "hit");
    return match;
  }

  return next(req);
};
