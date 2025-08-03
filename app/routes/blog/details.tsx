import React from "react";
import ReactMarkdown from "react-markdown";
import type { Route } from "./+types/details";
import type { PostMeta } from "~/types";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;

  const url = new URL("/posts-meta.json", request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error("Failed to fetch");

  const index = await res.json();
  const postMeta = index.find((post: PostMeta) => post.slug === slug);

  if (!postMeta) throw new Response("Not Found", { status: 404 });

  //   Dynamically import raw markdown

  const markdown = await import(`../../posts/${slug}.md?raw`);
  return { postMeta, markdown: markdown.default };
}

const BlogDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const { postMeta, markdown } = loaderData;
  console.log(postMeta, markdown);

  return <div>So</div>;
};

export default BlogDetailsPage;
