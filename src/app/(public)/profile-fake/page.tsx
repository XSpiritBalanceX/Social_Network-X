import { ProfileFake } from "./ProfileFake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProfileFake",
};

export default function ProfileFakePage() {
  return <ProfileFake />;
}
