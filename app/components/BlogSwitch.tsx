"use client"

import getPosts, { getPost } from "../lib/getPostsServer";
import { getPostBySlug, getAllPosts } from "../lib/getPosts";
import BlogSidebar from "../components/BlogSidebar";
import Post from "../components/Post"
import PostClient from "../components/PostClient"

interface Props {
    posts: string;
}

export default function BlogSwitch({posts}: Props) {
    return (
        <div className="flex flex-row">
            <BlogSidebar posts={posts} />
            {/* <Post params={{slug:"second"}} /> */}
        </div>
    )
}