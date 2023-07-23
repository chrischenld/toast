import React from "react";

export function Button({ text, onClick, type }) {
  return (
    <button
      className="h-8 pl-2 pr-2 flex items-center gap-0.5 inline-block max-w-max rounded-md text-zinc-400 hover:text-zinc-200 focus:text-zinc-200 focus:outline-0 focus:ring-zinc-200 focus:ring-2 underline"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
