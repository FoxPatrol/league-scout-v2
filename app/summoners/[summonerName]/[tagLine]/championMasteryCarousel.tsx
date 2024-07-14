import { ChampionMasteryDTO } from "twisted/dist/models-dto";

export function ChampionMasteryCarousel({
  championIds,
}: {
  championIds: ChampionMasteryDTO[];
}) {
  return (
    <div className="h-64 overflow-hidden">
      <img
        className="-mt-12"
        src={`https://cdn.communitydragon.org/latest/champion/${championIds[0].championId}/splash-art`}
      />
    </div>
  );
}
