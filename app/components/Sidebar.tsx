"use client";

import React, { useState } from "react";
import { NavItem } from "./NavItem";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Props {
  hasSubNav: boolean;
  subNavItems: SubNavItems[];
}

interface SubNavItems {
  name: string;
  href: string;
  accent?: boolean;
  accentText?: string;
}

export function Sidebar({ hasSubNav, subNavItems }: Props) {
  const [sidebarCollapse, setSidebarCollapse] = useState("18rem");
  const [hideCollapsed, setHideCollapsed] = useState(true);

  const toggleSidebarCollapse = () => {
    setSidebarCollapse(sidebarCollapse === "18rem" ? "6rem" : "18rem");
    setHideCollapsed(!hideCollapsed);
    console.log(sidebarCollapse);
  };

  return (
    <div className="flex flex-row">
      <motion.div
        className={`flex flex-col gap-4 max-h-screen p-4 bg-default-base border-r-2 border-default-border`}
        initial={{ width: sidebarCollapse }} // Animate the width change
        animate={{ width: sidebarCollapse }} // Animate the width change
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 50,
        }}
      >
        <Button text="hide" onClick={toggleSidebarCollapse} />
        <AnimatePresence>
          {hideCollapsed && (
            <motion.div
              className="flex flex-col gap-1"
              initial={{ opacity: 0, x: "-1rem" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-1rem" }}
              transition={{ type: "spring", stiffness: 500, damping: 50 }}
            >
              <Link href="/">
                <NavItem itemName="home" />
              </Link>
              <Link href="/toaster">
                <NavItem itemName="toaster" />
              </Link>
              <Link href="/flyout">
                <NavItem itemName="flyout" accent accentText="new" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {hasSubNav && (
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
            {subNavItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <NavItem
                  itemName={item.name}
                  accent={item.accent}
                  accentText={item.accentText}
                />
              </Link>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

Sidebar.defaultProps = {
  hasSubNav: false,
};
