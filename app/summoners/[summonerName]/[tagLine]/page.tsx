interface SummonerNameTagLinePageProps {
  params: { summonerName: string; tagLine: string };
}

export default function SummonerNameTagLinePage({
  params,
}: SummonerNameTagLinePageProps) {
  return (
    <>
      Hi SummonerNameTagLinePage {params.summonerName} {params.tagLine}
    </>
  );
}
