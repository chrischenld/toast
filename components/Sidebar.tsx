"use client";

import React, { useState, useEffect } from "react";
import { NavItem } from "./NavItem";
import { Button } from "./Button";
import { motion, AnimatePresence, useSpring } from "framer-motion";

export function Sidebar() {
  const [sidebarCollapse, setSidebarCollapse] = useState("18rem");
  const [hideCollapsed, setHideCollapsed] = useState(true);

  const toggleSidebarCollapse = () => {
    setSidebarCollapse(sidebarCollapse === "18rem" ? "6rem" : "18rem");
    setHideCollapsed(!hideCollapsed);
    console.log(sidebarCollapse);
  };

  return (
    <motion.div
      className={`flex flex-col gap-4 max-h-screen p-4 bg-default-base border-r-2 border-default-border`}
      initial={{ width: sidebarCollapse }} // Animate the width change
      animate={{ width: sidebarCollapse }} // Animate the width change
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 50,
      }} // Transition duration and onUpdate
    >
      <Button text="hide" onClick={toggleSidebarCollapse} />
      <AnimatePresence>
        {hideCollapsed && (
          <motion.div
            className="flex flex-col gap-1"
            initial={{ opacity: 0, x: "-2rem" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-2rem" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }} // Transition duration
          >
            <NavItem itemName="item one" accent accentText="new" />
            <NavItem itemName="item two" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}