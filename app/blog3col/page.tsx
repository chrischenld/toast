// app/blog3col/page.tsx

import getPosts, { getPost } from "../lib/getPostsServer";
import { Sidebar } from "../components/Sidebar";
import BlogSidebar from "../components/BlogSidebar";
import Post from "../components/Post";
import BlogSwitch from "../components/BlogSwitch";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  const posts = await getPosts();
  posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return (
    <div className="bg-default-base text-fg-default min-h-screen flex flex-row">
      <Sidebar selectedNavItem="blog3col" />
      <BlogSidebar posts={posts} />
      {searchParams.blog ? (
        <Post params={{ slug: searchParams.blog }} />
      ) : (
        <Post params={{ slug: posts[0].slug }} />
      )}
    </div>
  );
}
