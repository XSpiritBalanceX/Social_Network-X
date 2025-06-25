"use client";

import { useParams } from "next/navigation";

export function Profile() {
  const params = useParams<{ userid: string }>();

  return <div>Profile user with id: {params.userid}</div>;
}
