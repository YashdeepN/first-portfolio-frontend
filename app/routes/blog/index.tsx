import PostCard from "~/components/PostCard";
import type { PostMeta } from "~/types";
import type { Route } from "./+types/index";
import { useState } from "react";
import Pagination from "~/components/Pagination";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL("/posts-meta.json", request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();

  return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 3;

  const { posts } = loaderData;

  const totalPages = Math.ceil(posts.length / postPerPage);
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;

  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900">
        <h2 className="text-3xl text-white font-bold mb-8">📝 Blog</h2>
        {currentPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </>
  );
};

export default BlogPage;
