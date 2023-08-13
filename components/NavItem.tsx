import React from "react";

interface Props {
  itemName: string;
  accent: boolean;
  accentText: string;
}

export function NavItem({ itemName, accent, accentText }: Props) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        w-64
        h-8
        pl-4
        pr-4
        rounded-sm
        hover:bg-default-muted
        hover:cursor-pointer
    "
    >
      <p>{itemName}</p>
      {accent && <p className="text-default-accent">{accentText || "•"}</p>}
    </div>
  );
}
