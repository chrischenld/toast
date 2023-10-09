import { Sidebar } from "../components/Sidebar";
import { getAllPosts } from "../lib/getPosts"
import { BlogPostCard } from "../components/BlogPostCard";

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  // const recentPosts = posts.slice(0, 2);
  
  return (
    <div className="bg-default-base text-fg-default min-h-screen flex flex-row">
      <Sidebar selectedNavItem="blog" 
      // hasBlogPosts blogPosts={posts}
      />
        <div className="flex flex-col p-8 gap-2 w-full">
          {posts.map((post) => (
            <div key={post.title}>
              <BlogPostCard post={post} />
            </div>
          ))}
        </div>
    </div>
  );
}
