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
        const dateIso = date.toISOString();
        const localTime = date.toLocaleTimeString();

        return (
          <li value={hit.position}>
            <time datetime={dateIso}>{localTime}</time>
          </li>
        );
      })}
    </ol>
  );
}
