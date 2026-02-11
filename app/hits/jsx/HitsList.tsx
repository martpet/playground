import { decodeTime } from "@std/ulid";
import { type Hit } from "../kv.ts";

interface HitsListProps {
  hits: Hit[];
}

export function HitsList({ hits }: HitsListProps) {
  return (
    <ol class="hits-list" reversed>
      {hits.map((hit) => {
        const date = new Date(decodeTime(hit.id));
        const isoDate = date.toISOString();
        const prettyDate = date.toUTCString();

        return (
          <li value={hit.position}>
            <time datetime={isoDate}>{prettyDate}</time>
          </li>
        );
      })}
    </ol>
  );
}
