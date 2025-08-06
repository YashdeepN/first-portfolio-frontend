import { FaArrowLeft } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router";
import type { StrapiPost, StrapiResponse } from "~/types";
import type { Route } from "./+types/details";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;

  // const url = new URL("/posts-meta.json", request.url);
  // const res = await fetch(url.href);

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/posts?filters[slug][$eq]=${slug}&populate=image`
  );

  if (!res.ok) throw new Error("Failed to fetch");

  // const index = await res.json();
  // const postMeta = index.find((post: PostMeta) => post.slug === slug);

  const jsonData: StrapiResponse<StrapiPost> = await res.json();

  if (!jsonData.data.length) throw new Response("Not Found", { status: 404 });

  //   Dynamically import raw markdown

  // const markdown = await import(`../../posts/${slug}.md?raw`);

  const item = jsonData.data[0];

  const post = {
    id: item.id,
    slug: item.slug,
    excerpt: item.excerpt,
    title: item.title,
    date: item.date,
    body: item.body,
    image: item.image?.url ? `${item.image.url}` : "/images/no-image.png",
  };
  return { post };
}

const BlogDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const { post } = loaderData;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-900">
      <h1 className="text-3xl font-bold text-blue-400 mb-2">{post.title}</h1>
      <div className="text-sm text-gray-400 mb-6">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover mb-4"
      />

      <div className="prose prose-invert max-w-none mb-12">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>

      <Link
        to="/blog"
        className="flex items-center text-blue-400 hover:text-blue-500"
      >
        <FaArrowLeft className="mr-2" /> Back To Posts
      </Link>
    </div>
  );
};

export default BlogDetailsPage;
