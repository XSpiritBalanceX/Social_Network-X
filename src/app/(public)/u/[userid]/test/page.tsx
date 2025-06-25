type Params = { userid: string };

export default async function Test({ params }: { params: Promise<Params> }) {
  const { userid } = await params;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Profile user with id: {userid}
      </h1>
    </div>
  );
}
