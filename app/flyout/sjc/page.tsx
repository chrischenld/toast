"use client";

import { Sidebar } from "@/app/components/Sidebar";
import { Flyout } from "@/app/components/Flyout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-default-base text-fg-default min-h-screen flex flex-row gap-8">
      <div className="flex flex-row">
        <Sidebar />
        <Flyout />
      </div>
      <div className="p-8 text-fg-muted">
        <p>welcome to san jose</p>
      </div>
    </div>
  );
}
