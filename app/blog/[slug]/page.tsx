import Link from 'next/link';
import {exampleBlogPosts} from '@/components/products/blogList';

// Fetches the data for the blog post based on the slug
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the post in the exampleBlogPosts array based on the slug
  const post = exampleBlogPosts.find((post) => post.id === params.slug);

  if (!post) {
    return (
      <div className="text-2xl flex flex-col space-y-6">
        <div className="flex items-center mb-8">
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mr-4">
            <span className="text-2xl">←</span> Back to Blog
          </Link>
        </div>
        <p>Ahh we must have misplaced this post....😅</p>
      </div>
    );
  }

  const { title, body } = post;

  return (
    <div className="text-2xl flex flex-col space-y-6">
      {/* Container for subtle back button */}
      <div className="flex items-center mb-8">
        <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mr-4">
          <span className="text-2xl">←</span> Back to Blog
        </Link>
      </div>

      {/* Render the post title */}
      <h1 className="font-extrabold text-5xl tracking-tighter dark:text-white mb-4">
        {title}
      </h1>

      {/* Render the article body */}
      <article className="prose dark:prose-invert max-w-none">
        <p>{body}</p>
      </article>
    </div>
  );
}