import { createClient, EntryCollection, Entry } from "contentful";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/molecules/card";

import { createClient, EntryCollection } from "contentful";

// Contentful Client Setup
const spaceId = "h02wmcwkik29";
const accessToken = "8PMsoE3EtqxriO3oUJcPFdPGb_EMYAfvLfGU632B44s";

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
  environment: "master",
});

// Define the BlogPost interface to match Contentful's entry structure
interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
    articleTitle: {
      [locale: string]: string;
    };
    articleBody: {
      [locale: string]: any;
    };
  };
}

// Function to fetch all articles
async function fetchAllArticles(): Promise<BlogPost[] | null> {
  try {
    const entries: EntryCollection<BlogPost> = await client.getEntries({
      content_type: "article",
    });

    if (!entries || !entries.items) {
      console.error("No items found in the response");
      return [];
    }

    // Map entries to retrieve title and body with localization
    return entries.items.map((entry) => ({
      sys: entry.sys,
      fields: {
        articleTitle: entry.fields.articleTitle["en-US"] ?? "Untitled",
        articleBody: entry.fields.articleBody["en-US"] ?? { content: [{ nodeType: "paragraph", content: [{ value: "No content available.", nodeType: "text" }] }] },
      },
    }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    return null;
  }
}

// Server Component fetching data at build time
export default async function BlogPage() {
  const blogPosts = await fetchAllArticles();

  return (
    <div>
      {blogPosts.length > 0 ? (
        blogPosts.map((post) => (
          
          <div key={post.sys.id} className="my-4 group cursor-pointer">
            <Card className="overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105 shadow-lg rounded-lg">
            <Link href={`/blog/${post.sys.id}`} passHref>

              <CardHeader>
              <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{post.fields.articleTitle}</CardTitle>
              </CardHeader>
              <CardDescription>
                {post.fields.articleBody || ""}
              </CardDescription>
              <CardFooter className="flex justify-between items-center px-4 py-2 bg-gray-50">
                  <p className="text-xs text-muted-foreground"></p>
                  <p className="text-xs text-muted-foreground"></p>
                </CardFooter>
              </Link>
            </Card>
          </div>
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  );
}
