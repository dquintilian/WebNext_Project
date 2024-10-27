'use client'

import { useEffect, useState } from 'react'
import { Entry, EntryCollection } from 'contentful'
import Link from 'next/link'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/molecules/card'
import { createClient } from 'contentful'
import { Document } from '@contentful/rich-text-types'

const spaceId = "h02wmcwkik29";
const accessToken = "8PMsoE3EtqxriO3oUJcPFdPGb_EMYAfvLfGU632B44s";
if (!spaceId || !accessToken) {
  throw new Error('Contentful environment variables are not set');
}
console.log('Contentful client initialized with spaceId:', spaceId);

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
  environment: "master",
});
// Update EntrySys and BlogPost interfaces to match Contentful's structure
interface EntrySys {
  id: string;
  createdAt: string;
  updatedAt: string;
  locale: string | undefined; // Allow locale to be undefined
  contentType: {
    sys: {
      id: string;
      type: string;
    };
  };
}
interface BlogPost {
  sys: EntrySys;
  fields: {
    articleTitle: string | null;
    articleBody?: Document | null;
  };
  contentTypeId: string;
}
function isString(value: unknown): value is string {
  return typeof value === 'string'
}
async function fetchAllArticles(): Promise<BlogPost[]> {
  console.log('Fetching all articles from Contentful...');
  try {
    const entries: EntryCollection<BlogPost> = await client.getEntries<BlogPost>({
      content_type: 'article',
    });

    console.log('Fetched entries:', entries);

    if (!entries || !entries.items) {
      console.error('No items found in the response');
      return [];
    }
    return entries.items.map((entry: Entry<BlogPost>) => {
      console.log('Mapping entry:', entry);
      // Provide a fallback for `locale` if it’s `undefined`
      const locale = entry.sys.locale ?? "en-US";

      // Ensure `articleTitle` is a string and provide a fallback if necessary
      const articleTitle = isString(entry.fields.articleTitle)
        ? entry.fields.articleTitle
        : "Untitled";

      // Ensure `articleBody` is either a Document or null
      const articleBody = entry.fields.articleBody ?? null;

      return {
        sys: {
          ...entry.sys,
          locale, // Override with fallback locale
        },
        fields: {
          articleTitle,
          articleBody,
        },
        contentTypeId: entry.sys.contentType.sys.id, // Add contentTypeId explicitly
      };
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadArticles() {
      console.log('Loading articles...');
      try {
        const articles = await fetchAllArticles()
        console.log('Articles loaded:', articles);
        setBlogPosts(articles)
      } catch (error) {
        console.error("Failed to load articles:", error);
        setBlogPosts([]);
      } finally {
        setIsLoading(false)
        console.log('Loading state set to false');
      }
    }

    loadArticles()
  }, [])

  if (isLoading) {
    console.log('Loading state is true, displaying loading message.');
    return <div>Loading...</div>
  }

  console.log('Rendering blog posts:', blogPosts);

  return (
    <div>
      {blogPosts.length > 0 ? (
        blogPosts.map((post) => (
          <div key={post.sys.id} className="my-4">
            <Card>
              <CardHeader>
                <CardTitle>{post.fields.articleTitle}</CardTitle>
              </CardHeader>
              <CardDescription>
                {post.fields.articleBody ? (
                  // Render rich text if available, assuming you'd convert Document to React components here
                  <div>{/* Convert documentToReactComponents(post.fields.articleBody) here */}</div>
                ) : (
                  <p>No content available</p>
                )}
              </CardDescription>
              <CardFooter>
                <Link href={`/blog/${post.sys.id}`}>Read more</Link>
              </CardFooter>
            </Card>
          </div>
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  )
}
