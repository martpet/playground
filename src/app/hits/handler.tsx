import { respond405 } from "../../lib/resp.tsx";
import { HitsPage } from "./jsx/HitsPage.tsx";
import { createHit, listHits } from "./kv.ts";

export function handleHits(req: Request) {
  if (req.method === "GET") return serveHitsPage();
  if (req.method === "POST") return handlePost(req);
  return respond405("GET", "POST");
}

async function serveHitsPage() {
  const hits = await listHits({ reverse: true, consistency: "strong" });
  return <HitsPage hits={hits} />;
}

async function handlePost(req: Request) {
  await createHit();
  return Response.redirect(req.headers.get("referer") || req.url);
}
