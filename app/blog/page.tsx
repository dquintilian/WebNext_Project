"use client"; // If using this as a client component

import { useEffect, useState } from 'react';
import { createClient, EntryCollection, Entry } from 'contentful';
import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/molecules/card';

// Contentful Client Setup
const spaceId = 'h02wmcwkik29';
const accessToken = '8PMsoE3EtqxriO3oUJcPFdPGb_EMYAfvLfGU632B44s';

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
  environment: 'master',
});

// Interface for BlogPost
interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
    articleTitle: string;
    articleBody?: string;
  };
}

// Type guard function to check if a value is a string
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// Function to Fetch Articles
async function fetchAllArticles(): Promise<BlogPost[]> {
  try {
    const entries: EntryCollection<any> = await client.getEntries({
      content_type: 'article',
    });

    if (!entries || !entries.items) {
      console.error('No items found in the response');
      return [];
    }

    // Map entries to match BlogPost type
    return entries.items.map((entry: Entry<any>) => {
      const title = entry.fields.articleTitle;
      const body = entry.fields.articleBody;

      // Ensure that title is a string, otherwise provide a default value
      const articleTitle = isString(title) ? title : 'Untitled';

      // Check if the articleBody exists and is a string
      const articleBody = isString(body) ? body : undefined;

      return {
        sys: {
          id: entry.sys.id,
        },
        fields: {
          articleTitle,
          articleBody,
        },
      };
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

// Page Component
export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    async function loadArticles() {
      const articles = await fetchAllArticles();
      setBlogPosts(articles);
      setIsLoading(false); // Set loading to false once data is fetched
    }

    loadArticles();
  }, []);

  // Render a loading indicator or nothing while loading
  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a spinner or any other loading component
  }

  // Render the content once it's ready
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
                {post.fields.articleBody}
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
  );
}