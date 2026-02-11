import { type Hit } from "../kv.ts";
import { HitsForm } from "./HitsForm.tsx";
import { HitsList } from "./HitsList.tsx";

interface Props {
  hits: Hit[];
}

export function Hits({ hits }: Props) {
  return (
    <>
      <HitsForm />
      <HitsList hits={hits} />
    </>
  );
}
