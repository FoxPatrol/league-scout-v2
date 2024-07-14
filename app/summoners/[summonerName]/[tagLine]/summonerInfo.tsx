import { SummonerLeagueDto, SummonerV4DTO } from "twisted/dist/models-dto";

export function SummonerInfo({
  summonerName,
  tagLine,
  summoner,
  rank,
}: {
  summonerName: string;
  tagLine: string;
  summoner: SummonerV4DTO;
  rank: SummonerLeagueDto[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-1">
        <div className="relative">
          <img
            src={`/profile-icons/${summoner.profileIconId}.jpg`}
            className="aspect-square w-36 rounded-full"
          />
          <div className="absolute bg-slate-700 rounded-full px-2 bottom-1 left-1/2 transform -translate-x-1/2">
            <p className="text-white">{summoner?.summonerLevel}</p>
          </div>
        </div>
        <div>
          <h1>
            {summonerName} <span className="text-gray-400">#{tagLine}</span>
          </h1>
          <p className="text-sm">Last played: 5 hours ago</p>
          <p className="text-sm">Roles: Adc / Support</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-center">
        {rank.map((r, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div>{r.queueType}</div>
            <p>
              {r.tier} {r.rank}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
