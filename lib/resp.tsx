import { type JSX } from "preact";
import { renderToString } from "preact-render-to-string";

function checkAcceptHtml(req: Request) {
  return req.headers.get("accept")?.includes("text/html");
}

export function render(jsx: JSX.Element, init: ResponseInit = {}) {
  init.headers = new Headers(init.headers);
  init.headers.set("content-type", "text/html; charset=utf-8");
  return new Response("<!DOCTYPE html>" + renderToString(jsx), init);
}

export function respond404(req: Request, errPage: JSX.Element) {
  const init = { status: 404 };
  return checkAcceptHtml(req)
    ? render(errPage, init)
    : new Response("Not Found", init);
}

export function respond405(...methods: ("GET" | "POST")[]) {
  const init = { status: 405, headers: { Allow: methods.join(", ") } };
  return new Response("Method Not Allowed", init);
}

export function respond500(req: Request, errPage: JSX.Element) {
  const init = { status: 500 };
  return checkAcceptHtml(req)
    ? render(errPage, init)
    : new Response("Internal Server Error", init);
}
