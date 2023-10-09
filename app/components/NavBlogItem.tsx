import { DateFormatter } from "./DateFormatter";

interface Props {
    blogPosts: BlogPost[];
    onClick: MouseEvent;
}

interface BlogPost {
  slug: string;
  title: string;
}

export function NavBlogItem({blogPosts, onClick}: Props) {
    return (
        // <Link key={post.slug} href={`/blog/${post.slug}`}>
        <button key={blogPosts.slug} onClick={onClick}>
            <div className="flex flex-col p-4 hover:bg-bg-inset rounded-sm w-64">
                <DateFormatter dateString={blogPosts.date} />
                {blogPosts.title}
            </div>
        </button>
        // </Link>

    )
}