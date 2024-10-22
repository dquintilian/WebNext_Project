import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { notFound } from 'next/navigation'; // To handle 404 responses
import { exampleContentAssets } from '@/components/products/contentList'; // Import example content data

// Renders the content based on the slug
export default function ContentPostPage({ params }: { params: { slug: string } }) {
  // Find the content item based on the slug
  const post = exampleContentAssets.find((item) => item.id === params.slug);

  if (!post) {
    return (
      <div className="text-2xl flex flex-col space-y-6">
        <div className="flex items-center mb-8">
          <Link href="/content/entries" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mr-4">
            <span className="text-2xl">←</span> Back to Content Library
          </Link>
        </div>
        <p>Ahh we must have misplaced this post....😅</p>
      </div>
    );
  }

  const { title, content } = post;

  return (
    <div className="text-2xl flex flex-col space-y-6">
      {/* Container for subtle back button */}
      <div className="flex items-center mb-8">
        <Link href="/content/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mr-4">
          <span className="text-2xl">←</span> Back to Content Library
        </Link>
      </div>

      {/* Render the content title */}
      <h1 className="font-extrabold text-5xl tracking-tighter dark:text-white mb-4">
        {title}
      </h1>

      {/* Render the article body */}
      <article className="prose dark:prose-invert max-w-none">
        {content}
      </article>
    </div>
  );
}