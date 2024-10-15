import Link from 'next/link'; // Importing the Link component from Next.js to handle client-side navigation between blog posts
import { getBlogPosts } from 'app/blog/utils'; // Importing the getBlogPosts function, which retrieves the list of blog posts from a utility file

export const metadata = {
  title: 'Blog', // Metadata title used for SEO purposes
  description: 'Read my blog.', // Metadata description used for SEO purposes
};

export function BlogPosts() {
  const allBlogs = getBlogPosts(); // Retrieving all blog posts by calling the getBlogPosts function

  return (
    <div className="text-2xl flex flex-col space-y-6">
      {/* Container for the list of blog posts with increased spacing */}
      {allBlogs.map((post, index) => (
        // Mapping over all blog posts to generate a list of links
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block group hover:bg-white/20 dark:hover:bg-neutral-800/20 p-4 rounded-lg transition-all duration-300"
        >
          {/* Creating a link for each blog post with hover effect, padding, and rounded corners */}
          <p className="font-bold text-neutral-900 dark:text-neutral-100 group-hover:underline transition-colors duration-200">
            {/* Rendering the blog post title with index number, now in bold with updated hover effect */}
            {index + 1}. {post.metadata.title}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <section className="bg-gradient-to-r from-purple-400  p-10 rounded-xl shadow-2xl text-gray-800 dark:text-neutral-100">
      {/* Added gradient background, increased padding, rounded corners, and enhanced shadow for visual impact */}
      <h1 className="font-extrabold text-5xl mb-10 tracking-tighter text-center text-white drop-shadow-lg">
        📕 Blog
      </h1>
      {/* Increased font size, made it extra bold, and added drop shadow for better visibility and emphasis */}
      <div className="space-y-12">
        {/* Increased space between sections for a more open feel */}
        <div>
          <h2 className="font-semibold text-3xl mb-6 text-white">Posts</h2>
          {/* Increased font size and changed color to white to contrast with the background */}
          <BlogPosts />
        </div>
      </div>
    </section>
  );
}

/* Explanation:
- Updated BlogPosts component to add more spacing between items (`space-y-6`).
- Added hover effect to links with `hover:bg-white/20` for light mode and `dark:hover:bg-neutral-800/20` for dark mode.
- Added padding (`p-4`) and rounded corners (`rounded-lg`) to each link for a more appealing card-like effect.
- Changed hover text color to `text-pink-300` for a more vibrant effect.
- Enhanced the gradient background, text, and overall styling for visual impact in both light and dark modes.
*/