import Link from "next/link";
import { Blogs } from "@/components/assets/Blogs";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/molecules/card";
import { Separator } from "@radix-ui/react-separator";

// Example JSON data (replace this with Contentful fetching later)



export default function BlogPage() {

  const blogPosts = Blogs;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog 📝</h1>
      <Separator className="my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 cursor-pointer">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id} legacyBehavior passHref>
            <div className="group">
              <Card className="overflow-hidden transition-all duration-300 ease-in-out transform group-hover:scale-105 shadow-lg rounded-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm text-muted-foreground">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center px-4 py-2 bg-gray-50">
                  <p className="text-xs text-muted-foreground">
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(post.publishDate).toLocaleDateString()}
                  </p>
                </CardFooter>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
