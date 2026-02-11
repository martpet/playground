import type { VNode } from "preact";

export type PromiseMaybe<T> = T | Promise<T>;

export type Handler = (req: Request) => PromiseMaybe<Response>;

export type JsxHandler = (req: Request) => PromiseMaybe<VNode | Response>;

export type Middleware<T = Handler> = (next: T) => Handler;

export type DenoKvGetOptions = Parameters<Deno.Kv["get"]>[1];
