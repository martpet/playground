import { respond405 } from "lib/resp.tsx";
import { listHits } from "../hits/kv.ts";
import { HomePage } from "./jsx/HomePage.tsx";

export function handleHome(req: Request) {
  if (req.method == "GET") return serveHomePage();
  return respond405("GET");
}

export async function serveHomePage() {
  const maxHits = 1;

  const hits = await listHits({
    reverse: true,
    limit: maxHits + 1,
    consistency: "strong",
  });

  return (
    <HomePage
      hits={hits.slice(0, maxHits)}
      hasMoreHits={hits.length > maxHits}
    />
  );
}
