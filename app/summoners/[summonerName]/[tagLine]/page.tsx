import { LolApi, RiotApi } from "twisted";
import { Matches } from "./matches";
import { SummonerInfo } from "./summonerInfo";
import { RegionGroups, Regions } from "twisted/dist/constants";
import { ChampionMasteryCarousel } from "./championMasteryCarousel";
import { MatchV5DTOs } from "twisted/dist/models-dto";

interface SummonerPageProps {
  params: { summonerName: string; tagLine: string };
}

const rapi = new RiotApi(process.env.RGAPI!);
const api = new LolApi(process.env.RGAPI!);

async function getSummonerData(params: {
  summonerName: string;
  tagLine: string;
}) {
  const region = Regions.EU_WEST;
  const regionGroup = RegionGroups.EUROPE;

  const acc = await (
    await rapi.Account.getByRiotId(
      params.summonerName,
      params.tagLine,
      regionGroup
    )
  ).response;

  const summoner = (await api.Summoner.getByPUUID(acc.puuid, region)).response;
  const rank = (await api.League.bySummoner(summoner.id, region)).response;

  const topChamps = (
    await api.Champion.masteryByPUUID(acc.puuid, region)
  ).response.slice(0, 5);

  const matches = (await api.MatchV5.list(acc.puuid, regionGroup, { count: 5 }))
    .response;

  const matchesInfo: MatchV5DTOs.MatchDto[] = [];
  for (const match of matches) {
    matchesInfo.push((await api.MatchV5.get(match, regionGroup)).response);
  }

  return { summoner, matches, matchesInfo, topChamps, rank };
}

export default async function SummonerPage({ params }: SummonerPageProps) {
  params.summonerName = decodeURIComponent(params.summonerName);
  params.tagLine = decodeURIComponent(params.tagLine);

  const data = await getSummonerData(params);
  return (
    <>
      <ChampionMasteryCarousel championIds={data.topChamps} />

      <div className="flex flex-col gap-2">
        <SummonerInfo
          summonerName={params.summonerName}
          tagLine={params.tagLine}
          summoner={data.summoner}
          rank={data.rank}
        />
        <Matches
          matches={data.matchesInfo}
          summonerName={params.summonerName}
        />
      </div>
    </>
  );
}
