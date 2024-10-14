import Link from 'next/link'; // Importing Link component from Next.js for navigation
import { notFound } from 'next/navigation'; // Importing the notFound function from Next.js to handle missing pages
import { CustomMDX } from 'app/components/mdx'; // Importing the CustomMDX component to render Markdown content
import { formatDate, getBlogPosts } from 'app/blog/utils'; // Importing formatDate for date formatting and getBlogPosts to retrieve blog posts
import { baseUrl } from 'app/sitemap'; // Importing baseUrl to create URLs for social media previews and structured data

export async function generateStaticParams() {
  let posts = getBlogPosts(); // Retrieving all blog posts by calling the getBlogPosts function

  return posts.map((post) => ({
    slug: post.slug, // Returning an object with the slug of each post to generate static paths
  }));
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === decodeURIComponent(params.slug)); // Finding the blog post that matches the given slug
  if (!post) {
    return; // If no post is found, return nothing (implies the page will not have metadata)
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata; // Destructuring metadata from the found post

  let ogImage = image
    ? image // If the post has an image, use it
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`; // Otherwise, generate an Open Graph image URL using the title

  return {
    title, // Setting the page title
    description, // Setting the description of the page
    openGraph: {
      title, // Open Graph title for social media previews
      description, // Open Graph description for social media previews
      type: 'article', // Specifying that this is an article
      publishedTime, // Including the published time of the article
      url: `${baseUrl}/blog/${encodeURIComponent(post.slug)}`, // URL of the blog post
      images: [
        {
          url: ogImage, // Including the Open Graph image URL
        },
      ],
    },
    twitter: {
      card: 'summary_large_image', // Specifying the Twitter card type for better preview
      title, // Setting the Twitter title
      description, // Setting the Twitter description
      images: [ogImage], // Including the image for Twitter preview
    },
  };
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === decodeURIComponent(params.slug)); // Finding the blog post that matches the given slug

  if (!post) {
    notFound(); // If no post is found, call the notFound function to display a 404 page
  }

  return (
    <section className="font-aptos p-8 rounded-lg shadow-lg bg-white text-gray-800 dark:bg-black dark:text-neutral-100">
      {/* Container for subtle back button */}
      <div className="flex items-center mb-8">
        <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mr-4">
          <span className="text-2xl">←</span> Back to Blog
        </Link>
      </div>
      <h1 className="font-extrabold text-5xl tracking-tighter dark:text-white mb-4">
        {post.metadata.title} {/* Displaying the title of the blog post */}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)} {/* Displaying the formatted published date of the blog post */}
        </p>
      </div>
      <article className="prose dark:prose-invert max-w-none">
        <CustomMDX source={post.content} /> {/* Rendering the blog post content using the CustomMDX component */}
      </article>
      <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mr-4">
          <span className="text-2xl">←</span>
        </Link>
    </section>
  );
}

/* Explanation:
- Added support for both light and dark modes by using Tailwind's "dark:" classes.
- Set background and text colors to adapt to the theme (light or dark).
- Adjusted link, heading, and text colors to maintain visibility and consistency in both modes.
- Styled the blog title and back button to match the more visually interesting reference provided.
*/