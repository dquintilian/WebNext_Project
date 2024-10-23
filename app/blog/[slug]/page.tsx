import Link from "next/link";
import { Blogs, Blog } from "@/components/assets/Blogs";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Ensure that TypeScript knows Blogs is an array of Blog objects

  const post = Blogs.find((blog: Blog) => blog.id == params.slug);

  // If post is not found, show the fallback content
  if (!post) {
    return (
      <section className="text-2xl flex flex-col space-y-6">
        <div className="flex items-center mb-8">
          <Link
            href="/blog"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mr-4"
          >
            <span className="text-2xl">←</span> Back to Blog
          </Link>
        </div>
        <p>Ahh we must have misplaced this post...😅</p>
      </section>
    );
  }

  // Destructure title and body from the post since we know it exists
  const { title, body } = post;

  return (
    <div className="text-2xl flex flex-col space-y-6">
      <div className="flex items-center mb-8">
        <Link
          href="/blog"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mr-4"
        >
          <span className="text-2xl">←</span> Back to Blog
        </Link>
      </div>
      <h1 className="font-extrabold text-5xl tracking-tighter dark:text-white mb-4">
        {title}
      </h1>
      <article className="prose dark:prose-invert max-w-none">
        <p>{body}</p>
      </article>
    </div>
  );
}
