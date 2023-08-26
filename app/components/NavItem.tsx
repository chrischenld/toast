import React from "react";

interface Props {
  itemName: string;
  accent: boolean;
  accentText: string;
  isSelected: boolean;
}

export function NavItem({ itemName, accent, accentText, isSelected }: Props) {
  return (
    <div
      className={`
        flex
        items-center
        justify-between
        w-64
        h-8
        pl-4
        pr-4
        rounded-sm
        ${isSelected ? "text-fg-default" : "text-fg-muted"}
        hover:text-fg-default
        hover:bg-default-muted
        hover:cursor-pointer}
    `}
    >
      <p>{itemName || "item"}</p>
      {accent && <p className="text-default-accent">{accentText || "•"}</p>}
    </div>
  );
}

NavItem.defaultProps = {
  itemName: "item",
  accent: false,
  accentText: "•",
  isSelected: false,
};
