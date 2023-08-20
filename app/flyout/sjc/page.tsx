"use client";

import { Sidebar } from "@/app/components/Sidebar";

export default function Home() {
  return (
    <div className="bg-default-base text-fg-default min-h-screen flex flex-row gap-8">
      <Sidebar
        hasSubNav
        subNavItems={[
          { name: "bur", href: "/flyout/bur" },
          { name: "jfk", href: "/flyout/jfk" },
          { name: "sjc", href: "/flyout/sjc" },
        ]}
      />
      <div className="p-8 text-fg-muted">
        <p>welcome to san jose</p>
      </div>
    </div>
  );
}
