"use client";
import { useRouter } from "next/navigation";

export function ProfileFake() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile fake</h1>
      <button onClick={handleNavigate}>Go to home</button>
    </div>
  );
}
