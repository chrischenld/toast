"use client";

import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-default-base text-fg-default min-h-screen flex flex-row">
      <Sidebar
        selectedNavItem="flyout"
        hasSubNav
        subNavItems={[
          { name: "bur", href: "/flyout/bur" },
          { name: "jfk", href: "/flyout/jfk" },
          { name: "sjc", href: "/flyout/sjc" },
        ]}
      />
      <div className="p-8 text-fg-muted">
        <p>ready for takeoff</p>
      </div>
    </div>
  );
}
