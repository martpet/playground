import { type Hit } from "../kv.ts";
import { HitsForm } from "./HitsForm.tsx";
import { HitsList } from "./HitsList.tsx";

interface HitsProps {
  hits: Hit[];
}

export function Hits({ hits }: HitsProps) {
  return (
    <>
      <HitsForm />
      <HitsList hits={hits} />
    </>
  );
}
