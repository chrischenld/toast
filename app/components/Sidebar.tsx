"use client";

import React, { useState } from "react";
import { NavItem } from "./NavItem";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { DateFormatter } from "./DateFormatter"
import { NavBlogItem } from "./NavBlogItem";

interface Props {
  selectedNavItem?: string;
  hasSubNav?: boolean;
  subNavItems?: SubNavItems[];
  hasBlogPosts?: boolean;
  blogPosts?: BlogPost[];
}

interface SubNavItems {
  name: string;
  href: string;
  accent?: boolean;
  accentText?: string;
  isSelected?: boolean;
}

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
}

export function Sidebar({ selectedNavItem, hasSubNav, subNavItems, hasBlogPosts, blogPosts }: Props) {
  const [sidebarCollapse, setSidebarCollapse] = useState("18rem");
  const [hideCollapsed, setHideCollapsed] = useState(true);

  const toggleSidebarCollapse = () => {
    setSidebarCollapse(sidebarCollapse === "18rem" ? "6rem" : "18rem");
    setHideCollapsed(!hideCollapsed);
    console.log(sidebarCollapse);
  };

  return (
    <div className="flex flex-row">

      {/* Section for Main Nav */}

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
                <NavItem
                  itemName="home"
                  isSelected={selectedNavItem === "home"}
                />
              </Link>
              <Link href="/toaster">
                <NavItem
                  itemName="toaster"
                  isSelected={selectedNavItem === "toaster"}
                />
              </Link>
              <Link href="/flyout">
                <NavItem
                  itemName="flyout"
                  isSelected={selectedNavItem === "flyout"}
                />
              </Link>
              <Link href="/blog">
                <NavItem
                  itemName="blog"
                  isSelected={selectedNavItem === "blog"}
                  accent
                  accentText="new"
                />
              </Link>
              <Link href="/blog3col">
                <NavItem
                  itemName="blog3col"
                  isSelected={selectedNavItem === "blog3col"}
                  accent
                  accentText="new"
                />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Section for Sub Nav */}

      {hasSubNav && subNavItems && (
        <motion.div className="flex flex-col gap-4 max-h-screen p-4 bg-default-base border-r-2 border-default-border">
          <motion.div
            className="flex flex-col gap-1 pt-12"
            initial={{ opacity: 0, x: "-1rem" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.5, x: "-1rem" }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 50,
              delay: 0.06,
            }}
          >
            {subNavItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <NavItem
                  itemName={item.name}
                  isSelected={item.isSelected}
                  accent={item.accent}
                  accentText={item.accentText}
                />
              </Link>
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* Section for Blog Post Nav */}
      
      {hasBlogPosts && blogPosts && (
        <motion.div className="flex flex-col gap-4 max-h-screen p-4 bg-default-base border-r-2 border-default-border">
          <motion.div
            className="flex flex-col gap-1"
            initial={{ opacity: 0, x: "-1rem" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.5, x: "-1rem" }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 50,
              delay: 0.06,
            }}
          >
            {blogPosts && blogPosts.map((post) => (
              <a key={post.slug}>
                <div className="flex flex-col p-4 hover:bg-bg-inset rounded-sm w-64">
                  <DateFormatter dateString={post.date} />
                  {post.title}
                </div>
              </a>
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
