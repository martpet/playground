import { type JSX } from "preact";

export type PromiseMaybe<T> = T | Promise<T>;

export type Handler = (req: Request) => PromiseMaybe<Response>;

export type JsxHandler = (req: Request) => PromiseMaybe<Response | JSX.Element>;

export type Middleware<T = Handler> = (next: T) => Handler;

export type DenoKvGetOptions = Parameters<Deno.Kv["get"]>[1];
