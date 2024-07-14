import { MatchV5DTOs } from "twisted/dist/models-dto";
import { Match } from "./match";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Matches({
  matches,
  summonerName,
}: {
  matches: MatchV5DTOs.MatchDto[];
  summonerName: string;
}) {
  return (
    <ul className="w-full flex flex-col gap-2">
      {matches.map((match, index) => (
        <Match key={index} match={match} summonerName={summonerName}></Match>
      ))}
    </ul>
  );
}
