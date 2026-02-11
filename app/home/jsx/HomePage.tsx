import { Hits } from "../../hits/jsx/Hits.tsx";
import { type Hit } from "../../hits/kv.ts";
import { Page } from "../../jsx/Page.tsx";

interface HomePageProps {
  hits: Hit[];
  hasMoreHits?: boolean;
}

export function HomePage({ hits, hasMoreHits }: HomePageProps) {
  const head = (
    <>
      <link rel="stylesheet" href="/home/public/Home.css" />
      <link rel="stylesheet" href="/hits/public/Hits.css" />
    </>
  );
  return (
    <Page head={head} class="home-page">
      <h1>Home</h1>
      <Hits hits={hits} />
      {hasMoreHits && <a href="/hits/">All hits</a>}
    </Page>
  );
}
