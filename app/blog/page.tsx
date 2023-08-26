"use client";

import React, { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-default-base text-fg-default min-h-screen flex flex-row gap-8">
      <Sidebar selectedNavItem="blog" />
      <div className="p-8 text-fg-muted">
        <p>this is my blog</p>
      </div>
    </div>
  );
}
