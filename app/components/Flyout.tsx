"use client";

import React, { useState } from "react";
import { NavItem } from "./NavItem";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function Flyout() {
  return (
    <motion.div
      className="flex flex-col gap-4 max-h-screen p-4 bg-default-base border-r-2 border-default-border"
      initial={{ opacity: 0, width: "2rem" }}
      animate={{ opacity: 1, width: "18rem" }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 50,
        delay: 0.03,
      }}
    >
      <motion.div
        className="flex flex-col gap-1 pt-12"
        initial={{ opacity: 0, x: "-1rem" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0.5, x: "-1rem" }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 50,
          delay: 0.03,
        }}
      >
        <Link href="/flyout/bur">
          <NavItem itemName="bur" />
        </Link>
        <Link href="/flyout/jfk">
          <NavItem itemName="jfk" />
        </Link>
        <Link href="/flyout/sjc">
          <NavItem itemName="sjc" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
