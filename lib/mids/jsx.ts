import { render } from "../resp.tsx";
import type { JsxHandler, Middleware } from "../types.ts";

export const jsxMid: Middleware<JsxHandler> = (next) => {
  return async (req) => {
    const out = await next(req);
    if (out instanceof Response) return out;
    return render(out);
  };
};
