import { Separator } from "@radix-ui/react-separator";
import { MatchV5DTOs } from "twisted/dist/models-dto";

export function Match({
  match,
  summonerName,
}: {
  match: MatchV5DTOs.MatchDto;
  summonerName: string;
}) {
  const mainParticipant = match.info.participants.find((participant) => {
    return participant.riotIdGameName === summonerName;
  });

  const bgColorClass = mainParticipant?.win ? "bg-green-300" : "bg-red-300";

  return (
    <div className={`${bgColorClass} flex flex-row gap-2 rounded-md p-2`}>
      <div className="flex-1">
        <div>{match.info.gameMode}</div>
        <div>{`${Math.floor(match.info.gameDuration / 60)}m ${Math.floor(
          match.info.gameDuration % 60
        )}s`}</div>
        <div>{mainParticipant?.championName}</div>
      </div>
      <Separator orientation="vertical" />
      <div className="grid grid-cols-2 grid-flow-col gap-1 w-1/3">
        {match.info.participants.map((participant) => (
          <div
            key={participant.summonerName} // Add a unique key for each child in a list
            className={`flex gap-1 ${
              participant.teamId % 200
                ? "col-start-1 justify-start"
                : "col-start-2 flex-row-reverse"
            }`}
          >
            <img
              src={`/champion-icons/${participant.championId}.png`}
              className="aspect-square h-6"
            />
            <p
              className={
                summonerName === participant.summonerName ? "font-bold" : ""
              }
            >
              {participant.summonerName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
