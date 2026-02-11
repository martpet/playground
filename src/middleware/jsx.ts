import type { VNode } from "preact";
import { render } from "../util/resp.tsx";
import type { Handler } from "../util/types.ts";

type JsxHandlerMaybe = (r: Request) =>
  | VNode
  | Promise<VNode>
  | ReturnType<Handler>;

export function withJsx(handler: JsxHandlerMaybe) {
  return async (req: Request) => {
    const result = await handler(req);
    if (result instanceof Response) return result;
    return render(result);
  };
}
