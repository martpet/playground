import { serveDir } from "@std/http";
import { handleHits } from "./hits/handler.tsx";
import { handleHome } from "./home/handler.tsx";
import { notFound } from "./util/resp.tsx";

export function handler(req: Request) {
  const pathname = new URL(req.url).pathname;

  if (pathname.includes("/public/")) {
    return serveDir(req, { fsRoot: "src" });
  }

  if (pathname === "/") return handleHome(req);
  if (pathname === "/hits/") return handleHits(req);

  return notFound(req);
}
