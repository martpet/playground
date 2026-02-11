import { handler } from "./src/handler.tsx";
import { resetKv } from "./src/kv.ts";
import { withJsx } from "./src/middleware/jsx.ts";

Deno.serve(withJsx(handler));

Deno.cron("Reset DB", { minute: { every: 30 } }, resetKv);
