import type { Metadata } from "next";

type Params = { userid: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  return { title: `User ${(await params).userid}` };
}

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
