import { createClient, EntryCollection, Entry } from "contentful";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/molecules/card";

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
  return typeof value === "string";
}

// Function to Fetch Articles
async function fetchAllArticles(): Promise<BlogPost[]> {
  try {
    const entries: EntryCollection<any> = await client.getEntries({
      content_type: "article",
    });

    if (!entries || !entries.items) {
      console.error("No items found in the response");
      return [];
    }

    // Map entries to match BlogPost type
    return entries.items.map((entry: Entry<any>) => {
      const title = entry.fields.articleTitle;
      const body = entry.fields.articleBody;

      // Ensure that title is a string, otherwise provide a default value
      const articleTitle = isString(title) ? title : "Untitled";

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
    console.error("Error fetching articles:", error);
    return [];
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
