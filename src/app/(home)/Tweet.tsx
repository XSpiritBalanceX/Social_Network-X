import type { ITweet } from "@/shared/types/tweet.interface";

interface ITweetProps {
  tweet: ITweet;
}

export function Tweet({ tweet }: ITweetProps) {
  return (
    <div>
      <p>{tweet.text}</p>
      <span>@{tweet.author}</span>
    </div>
  );
}
