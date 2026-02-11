import { compose } from "lib/mids/compose.ts";
import { jsxMid } from "lib/mids/jsx.ts";
import { handler } from "./app/handler.tsx";
import { clearHits } from "./app/hits/kv.ts";
import { errMid } from "./app/util.tsx";

const mids = [
  errMid,
  // cacheMid,
];

Deno.serve(compose(mids, jsxMid(handler)));

Deno.cron("Clear hits", { hour: { exact: 12 } }, clearHits);
