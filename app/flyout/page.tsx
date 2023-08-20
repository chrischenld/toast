"use client";

import React, { useState, useEffect } from "react";
import { Toast } from "../components/Toast";
import { Button } from "../components/Button";
import { Sidebar } from "../components/Sidebar";
import { Flyout } from "../components/Flyout";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-default-base text-fg-default min-h-screen flex flex-row gap-8">
      <div className="flex flex-row">
        <Sidebar />
        <Flyout />
      </div>
      <div className="p-8 text-fg-muted">
        <p>ready for takeoff</p>
      </div>
    </div>
  );
}
