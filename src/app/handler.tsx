import { serveDir } from "@std/http";
import { handleHits } from "./hits/handler.tsx";
import { handleHome } from "./home/handler.tsx";
import { respondNotFound } from "./util.tsx";

export function handler(req: Request) {
  const { pathname } = new URL(req.url);
  const { dirname } = import.meta;

  if (pathname.includes("/public/")) return serveDir(req, { fsRoot: dirname });
  if (pathname === "/") return handleHome(req);
  if (pathname === "/hits/") return handleHits(req);

  return respondNotFound(req);
}
