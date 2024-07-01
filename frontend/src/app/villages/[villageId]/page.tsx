export default function VillageDetails({
  params,
}: {
  params: { villageId: string };
}) {
  return <h1>village details {params.villageId}</h1>;
}
