import { decodeTime } from "@std/ulid";
import { type Hit } from "../kv.ts";

interface Props {
  hits: Hit[];
}

export function HitsList({ hits }: Props) {
  return (
    <ol class="hits-list">
      {hits.map((hit) => {
        const date = new Date(decodeTime(hit.id));
        return (
          <li>
            <time datetime={date.toISOString()}>
              {date.toLocaleTimeString()}
            </time>
          </li>
        );
      })}
    </ol>
  );
}
