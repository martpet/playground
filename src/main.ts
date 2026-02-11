import { handler } from "./app/handler.tsx";
import { clearHits } from "./app/hits/kv.ts";
import { errMid } from "./app/util.tsx";
import { jsxMid } from "./lib/mid/jsx.ts";

const app = errMid(jsxMid(handler));

Deno.serve(app);

Deno.cron("Clear hits", { hour: { exact: 12 } }, clearHits);
