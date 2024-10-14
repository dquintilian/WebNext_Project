import Link from 'next/link';
import { fetchEntry } from 'utils/articleLoader';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type Post = {
  articleTitle: string;
  articleBody: {
    nodeType: string;
    content: any[];
  };
};

// This is now an async server component
export default async function BlogPostsBlog({ params }) {
  const post: Post | null = await fetchEntry(params.slug);  // Ensure post can be null

  if (!post) {
    return <div>
      <div className="flex items-center mb-8">
        <Link href="/content/entries" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mr-4">
          <span className="text-2xl">←</span> Back to Blog
        </Link>
      </div>
      <p>Ahh we must of misplaced this post....😅</p>;
      </div>
  }

  const { articleTitle, articleBody } = post;
  return (
    <div className="text-2xl flex flex-col space-y-6">
      {/* Container for subtle back button */}
      <div className="flex items-center mb-8">
        <Link href="/content/entries" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mr-4">
          <span className="text-2xl">←</span> Back to Blog
        </Link>
      </div>

      {/* Render the post title */}
      <h1 className="font-extrabold text-5xl tracking-tighter dark:text-white mb-4">
        {articleTitle}  {/* Assuming the post has `articleTitle` */}
      </h1>

      {/* Post metadata or description */}
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        
        </p>
      </div>

      <article className="prose dark:prose-invert max-w-none">
      {documentToReactComponents(articleBody)}
      </article>
    </div>
  );
}