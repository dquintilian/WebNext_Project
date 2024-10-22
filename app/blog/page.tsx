import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";

// Define the shape of our blog post
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  publishDate: string;
}

// Example JSON data (replace this with Contentful fetching later)
const exampleBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React",
    slug: "getting-started-with-react",
    excerpt: "Learn the basics of React and start building your first component.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishDate: "2023-05-15",
  },
  {
    id: "2",
    title: "Advanced TypeScript Techniques",
    slug: "advanced-typescript-techniques",
    excerpt: "Dive deep into TypeScript and learn advanced types and patterns.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishDate: "2023-05-20",
  },
  {
    id: "3",
    title: "Building Responsive Layouts with Tailwind CSS",
    slug: "building-responsive-layouts-with-tailwind-css",
    excerpt: "Create beautiful, responsive designs quickly with Tailwind CSS.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishDate: "2023-05-25",
  },
  {
    id: "4",
    title: "Next.js 13: What's New",
    slug: "nextjs-13-whats-new",
    excerpt: "Explore the latest features and improvements in Next.js 13.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishDate: "2023-05-30",
  },
  {
    id: "5",
    title: "State Management with Redux Toolkit",
    slug: "state-management-with-redux-toolkit",
    excerpt: "Simplify your Redux code with the official, opinionated Redux Toolkit.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishDate: "2023-06-04",
  },
  {
    id: "6",
    title: "Building a REST API with Node.js and Express",
    slug: "building-a-rest-api-with-nodejs-and-express",
    excerpt: "Learn how to create a robust REST API using Node.js and Express.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishDate: "2023-06-09",
  },
];

export default function BlogPage() {
  // For now, we're using the example data instead of fetching from Contentful
  const blogPosts = exampleBlogPosts;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog 📝</h1>
      <Separator className="my-4"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          // <Link href={`/blog/${post.slug}`} key={post.id} legacyBehavior passHref>
            <a className="group">
              <Card className="overflow-hidden transition-all duration-300 ease-in-out transform group-hover:scale-105 shadow-lg rounded-lg">
                <div className="relative h-48">
                  {/* <Image
                    src={post.featuredImage}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  /> */}
                </div>
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
                    {new Date(post.publishDate).toLocaleDateString()}
                  </p>
                </CardFooter>
              </Card>
            </a>
          // </Link>
        ))}
      </div>
    </div>
  );
}