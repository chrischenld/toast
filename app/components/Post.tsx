import getPosts, { getPost } from "../lib/getPostsServer";
import { notFound } from "next/navigation";
import markdownToHtml from "../lib/markdownToHtml";

export default async function Post({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);
  // notFound is a Next.js utility
  if (!post) return notFound();
  // Pass the post contents to MDX

  const content = await markdownToHtml(post?.body || "");

  return (
    <div className="container mx-auto">
      <main>
        <div className="w-full h-16  text-white">
          <p className="text-2xl">{post.title}</p>
          <div
            // className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </main>
    </div>
  );
}
