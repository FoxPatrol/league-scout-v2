interface SummonerLoadingProps {
  params: { summonerName: string; tagLine: string };
}

export default async function SummonerLoading({
  params,
}: SummonerLoadingProps) {
  return (
    <>
      <h1 className="p-8 bg-red-500">LOADING LOADING LOADING LOADING</h1>
    </>
  );
}
