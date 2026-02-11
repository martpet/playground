import { type JSX } from "preact";
import { respond500 } from "../resp.tsx";
import type { Middleware } from "../types.ts";

export function makeErrMid(errPage: JSX.Element): Middleware {
  return (next) => async (req) => {
    try {
      const resp = await next(req);
      return resp;
    } catch (err) {
      console.log(err);
      return respond500(req, errPage);
    }
  };
}
