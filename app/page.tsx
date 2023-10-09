"use client";

// import RootLayout from "./layout";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    // <RootLayout selectedNavItem="home">
    <div className="bg-default-base text-fg-default min-h-screen flex flex-row">
      <Sidebar selectedNavItem="home" />
      <div className="p-8 text-fg-muted">
        <p>indoorpig</p>
        <p>work in progress</p>
      </div>
    </div>
    // </RootLayout>
  );
}
