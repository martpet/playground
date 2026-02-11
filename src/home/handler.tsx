import { listHits } from "../hits/kv.ts";
import { methodAllowed } from "../util/resp.tsx";
import { HomePage } from "./jsx/HomePage.tsx";

export function handleHome(req: Request) {
  if (req.method == "GET") return serveHomePage();
  return methodAllowed("GET");
}

export async function serveHomePage() {
  const maxHits = 1;

  const hits = await listHits({
    limit: maxHits + 1,
    reverse: true,
    consistency: "strong",
  });

  return (
    <HomePage
      hits={hits.slice(0, maxHits)}
      hasMoreHits={hits.length > maxHits}
    />
  );
}
