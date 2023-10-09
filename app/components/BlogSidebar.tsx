// BlogSidebar.tsx

"use client";

import type { Post } from "../lib/types";
import { DateFormatter } from "./DateFormatter";
import Link from "next/link";
import React, { ButtonHTMLAttributes, useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  posts: Post;
}

export default function BlogSidebar({ posts }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleBlogSidebarClick = (slug: string) => {
    console.log(`params: ${slug}`);
    router.push(`/blog3col/?blog=${slug}`);
    return slug;
  };

  return (
    <div className="flex flex-col gap-4 max-h-screen p-4 bg-default-base border-r-2 border-default-border">
      <div className="flex flex-col gap-1">
        {posts &&
          posts
            .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
            .map((post) => (
              <button
                key={post.slug}
                onClick={() => handleBlogSidebarClick(post.slug)}
                className="text-left"
              >
                <div
                  className={`flex flex-col p-4 hover:bg-bg-inset rounded-sm w-64`}
                >
                  <DateFormatter dateString={post.date} />
                  {post.title}
                </div>
              </button>
            ))}
      </div>
    </div>
  );
}
