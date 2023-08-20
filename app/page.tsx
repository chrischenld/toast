"use client";

import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="bg-default-base text-fg-default min-h-screen flex flex-row gap-8">
      <Sidebar />
      <div className="p-8 text-fg-muted">
        <p>indoorpig</p>
        <p>work in progress</p>
      </div>
    </div>
  );
}
