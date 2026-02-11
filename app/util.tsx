import { makeErrorMid } from "lib/mids/error.ts";
import { respond404 } from "lib/resp.tsx";
import { Page404 } from "./jsx/Page404.tsx";
import { Page500 } from "./jsx/Page500.tsx";

export const respondNotFound = (req: Request) => respond404(req, <Page404 />);

export const errMid = makeErrorMid(<Page500 />);
