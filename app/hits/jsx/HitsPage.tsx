import { Page } from "../../jsx/Page.tsx";
import { type Hit } from "../kv.ts";
import { Hits } from "./Hits.tsx";

interface HitsPageProps {
  hits: Hit[];
}

export function HitsPage({ hits }: HitsPageProps) {
  const head = <link rel="stylesheet" href="/hits/public/Hits.css" />;

  return (
    <Page head={head} class="hits-page">
      <h1>Hits</h1>
      <Hits hits={hits} />
      <a href="/">Home</a>
    </Page>
  );
}
