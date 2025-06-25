type Params = { tag: string };

export default async function Test({
  searchParams,
}: {
  searchParams: Promise<Params>;
}) {
  const { tag } = await searchParams;
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Explore {tag && `by #${tag}`}</h1>
    </div>
  );
}
