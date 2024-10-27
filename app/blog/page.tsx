import { createClient, EntryCollection, Entry } from "contentful";
import Link from "next/link";
import React from "react";
import { Document } from "@contentful/rich-text-types";

// Contentful Client Setup
const spaceId = "h02wmcwkik29";
const accessToken = "8PMsoE3EtqxriO3oUJcPFdPGb_EMYAfvLfGU632B44s";

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
  environment: "master",
});

// Define the BlogPost interface
interface EntrySys {
  id: string;
  createdAt: string;
  updatedAt: string;
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

// Function to Fetch All Articles
async function fetchAllArticles(): Promise<BlogPost[]> {
  console.log("Fetching all articles from Contentful...");
  try {
    const entries: EntryCollection<BlogPost> = await client.getEntries<BlogPost>({
      content_type: "article",
    });

    if (!entries.items) {
      console.error("No items found in the response");
      return [];
    }

    return entries.items.map((entry: Entry<BlogPost>) => ({
      sys: {
        id: entry.sys.id,
        createdAt: entry.sys.createdAt,
        updatedAt: entry.sys.updatedAt,
        contentType: entry.sys.contentType,
      },
      fields: {
        articleTitle: entry.fields.articleTitle ?? "Untitled",
        articleBody: entry.fields.articleBody ?? null,
      },
      contentTypeId: entry.sys.contentType.sys.id,
    }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

// Server-Side Component to Render Blog Posts
export default async function BlogListPage() {
  const blogPosts = await fetchAllArticles();

  if (blogPosts.length === 0) {
    return (
      <section className="text-2xl flex flex-col space-y-6">
        <p>No blog posts available.</p>
      </section>
    );
  }

  return (
    <section className="content text-2xl flex flex-col space-y-6">
      <div className="mb-8">
        <h1 className="font-extrabold text-5xl tracking-tighter dark:text-white mb-4">
          Blog Articles
        </h1>
      </div>
      {blogPosts.map((post) => (
        <div key={post.sys.id} className="mb-4">
          <Link
            href={`/blog/${post.sys.id}`}
            className="text-blue-600 hover:underline text-3xl font-bold"
          >
            {post.fields.articleTitle || "Untitled"}
          </Link>
          <p className="text-lg leading-relaxed">
            Published on: {new Date(post.sys.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </section>
  );
}