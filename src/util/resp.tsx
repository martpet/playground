import type { VNode } from "preact";
import { renderToString } from "preact-render-to-string";
import { Page404 } from "../jsx/Page404.tsx";

export function render(vnode: VNode, init: ResponseInit = {}) {
  const html = "<!DOCTYPE html>" + renderToString(vnode);
  init.headers = new Headers(init.headers);
  init.headers.set("content-type", "text/html; charset=utf-8");
  return new Response(html, init);
}

export function notFound(req: Request) {
  const init = { status: 404 };
  return req.headers.get("accept") === "text/html"
    ? render(<Page404 />, init)
    : new Response("Not Found", init);
}

export function methodAllowed(...methods: ("GET" | "POST")[]) {
  return new Response("Method Not Allowed", {
    status: 405,
    headers: { Allow: methods.join(", ") },
  });
}
