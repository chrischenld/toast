import { DateFormatter } from "./DateFormatter";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Items[];
}

interface Items {
  key: string;
}

export function BlogPostCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="px-8 py-6 w-full hover:bg-bg-inset rounded-sm">
        <p className="text-fg-muted lowercase"><DateFormatter dateString={post.date} /></p>
        <p>{post.title}</p>
        {post?.coverImage && <Image />}
      </div>
    </Link>
  );
}
