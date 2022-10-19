import { AiFillTwitterCircle } from "react-icons/ai";

export const twitter = "https://twitter.com/scottmilliorn";

export function Twitter() {
  return (
    <button className="px-4 py-2 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600 text-zinc-900">
      <a
        target="_blank"
        className="inline-flex text-4xl"
        href={twitter}
        download
        rel="noreferrer"
      >
        <AiFillTwitterCircle />
      </a>
    </button>
  );
}
