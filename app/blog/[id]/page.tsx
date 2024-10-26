import { BLOCKS, INLINES, Block, Inline, Text } from "@contentful/rich-text-types";
import { createClient } from "contentful";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import React from "react";

// Contentful Client Setup
const spaceId = "h02wmcwkik29";
const accessToken = "8PMsoE3EtqxriO3oUJcPFdPGb_EMYAfvLfGU632B44s";

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
  environment: "master",
});

// Interface for BlogPost
interface BlogPost {
  title: string | null;
  body: any | null;
}

// Custom render options with types for `node` and `children`
const renderOptions: Options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node: Block, children: React.ReactNode) => (
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: Block, children: React.ReactNode) => (
      <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>
    ),
    [BLOCKS.PARAGRAPH]: (node: Block, children: React.ReactNode) => (
      <p className="text-lg leading-relaxed mb-4">{children}</p>
    ),
    [BLOCKS.QUOTE]: (node: Block, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4">{children}</blockquote>
    ),
    [INLINES.HYPERLINK]: (node: Inline) => {
      const content = node.content as Text[];
      return (
        <a
          href={(node.data.uri as string) || "#"}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content[0]?.value || "Link"}
        </a>
      );
    },
  },
};

// Function to Fetch a Single Article by Entry ID
async function fetchArticleById(entryId: string): Promise<BlogPost | null> {
  try {
    const entry = await client.getEntry(entryId);
    const title = entry.fields.articleTitle ?? "Untitled";
    const body = entry.fields.articleBody ?? {
      content: [{ nodeType: "paragraph", content: [{ value: "No content available.", nodeType: "text" }] }],
    };

    return { title, body };
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

// Server Component for Blog Post Page
export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = await fetchArticleById(params.id);

  if (!post) {
    return (
      <section className="text-2xl flex flex-col space-y-6">
        <div className="flex items-center mb-8">
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mr-4">
            <span className="text-2xl">←</span> Back to Blog
          </Link>
        </div>
        <p>Ahh, we must have misplaced this post...😅</p>
      </section>
    );
  }

  const { title, body } = post;

  return (
    <div className="content text-2xl flex flex-col space-y-6">
      <div className="flex items-center mb-8">
        <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mr-4">
          <span className="text-2xl">←</span> Back to Blog
        </Link>
      </div>
      <h1 className="font-extrabold text-5xl tracking-tighter dark:text-white mb-4">
        {title || "Untitled"}
      </h1>
      <article className="prose dark:prose-invert max-w-none">
        {documentToReactComponents(body, renderOptions)}
      </article>
    </div>
  );
}