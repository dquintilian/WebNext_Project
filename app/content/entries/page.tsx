// app/page.tsx
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, Document } from '@contentful/rich-text-types';
import { fetchEntries } from '../../../utils/articleList'; // Import a function to fetch a list of article entries, adjust the path as needed
import { Entry, EntryCollection, EntrySkeletonType } from 'contentful';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { Span } from 'next/dist/trace';

// Define types for your content (this is useful for TypeScript)

export default async function HomePage() {
  // Fetch entries from Contentful asynchronously using fetchEntries function
  // Note: Fix any issues with fields later if needed
  const entries: EntryCollection<EntrySkeletonType> | null = await fetchEntries();

  // If no entries are found or the entries are not in the expected array format, display a fallback message
  if (!entries || !Array.isArray(entries.items)) {
    return <div>No articles available</div>;
  }

  // Options to customize the rendering of rich text from Contentful
  const options = {
    renderMark: {
      // Render bold text using a <strong> element with a custom class
      [MARKS.BOLD]: (text: string) => <strong className='text-bold'>{text}</strong>,
    },
    renderNode: {
      // Render <h3> elements with custom styling
      [BLOCKS.HEADING_3]: (node: any, children: any) => <h3 className='text-2xl py-4'>subTitle:{children}</h3>,
      // Render paragraphs with custom styling
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className='py-4'>Paragraph:{children}</p>,
    },
  };

  // Parse the entries data and render the heading for each article
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Iterate through the list of entries and render each one */}
      <div>
        <span>
          {/* <BlogFilter /> */}
        </span>
      </div>
      {entries.items.map((item) => (
    
        <div
          key={item.sys.id}
          className="my-10 p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* Render the article title or a default value if it's not available */}
          <h2 className="text-2xl font-semibold py-4 text-white">
            <Link href={`/content/entries/${item.sys.id}`}>
              {typeof item.fields.articleTitle === 'string' ? item.fields.articleTitle : 'Untitled Article'}.
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
}