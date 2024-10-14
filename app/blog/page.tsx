import Link from 'next/link';
import { BlogPosts } from 'app/components/posts';

export default function Page() {
  return (
    <section className="font-aptos p-8 rounded-lg shadow-lg bg-white text-gray-800 dark:bg-black dark:text-neutral-100">
      {/* Container for subtle back button */}
      <div className="flex items-center mb-8">
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mr-4">
          <span className="text-2xl">←</span> Home
        </Link>
        <h1 className="font-extrabold text-5xl tracking-tighter text-center flex-grow text-blue-600 dark:text-blue-400">
          📕 My Blog
        </h1>
      </div>
      
      {/* Blog posts section */}
      <div className="space-y-12">
        <div>
          <h2 className="font-semibold text-3xl mb-6 text-gray-800 dark:text-neutral-100 border-b-2 border-gray-300 dark:border-neutral-700 pb-2">
            Posts
          </h2>
          <BlogPosts />
        </div>
      </div>
    </section>
  );
}

/* Explanation:
- Added support for both light and dark modes by using Tailwind's "dark:" classes.
- Set background and text colors to adapt to the theme (light or dark).
- Adjusted link and heading colors to maintain visibility and aesthetic consistency in both modes.
*/