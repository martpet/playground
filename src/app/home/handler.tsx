import { respond405 } from "../../lib/resp.tsx";
import { getHitsCount, listHits } from "../hits/kv.ts";
import { HomePage } from "./jsx/HomePage.tsx";

export function handleHome(req: Request) {
  if (req.method == "GET") return serveHomePage();
  return respond405("GET");
}

export async function serveHomePage() {
  const [hits, hitsCount] = await Promise.all([
    listHits({ reverse: true, limit: 1, consistency: "strong" }),
    getHitsCount({ consistency: "strong" }),
  ]);

  return <HomePage hits={hits} hasMoreHits={hitsCount > hits.length} />;
}
