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

// Define the shape of our content asset
interface ContentAsset {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  type: string; // e.g., Slide Deck, PDF, Video
}

// Example JSON data (replace this with real data fetching later)
const exampleContentAssets: ContentAsset[] = [
  {
    id: "1",
    title: "Effective Product Management Strategies",
    slug: "effective-product-management-strategies",
    description: "A comprehensive slide deck on modern product management techniques.",
    thumbnail: "/assets/thumbnails/slide-deck-placeholder.svg",
    type: "Slide Deck",
  },
  {
    id: "2",
    title: "Introduction to AI in Product Design",
    slug: "introduction-to-ai-in-product-design",
    description: "An insightful PDF guide on incorporating AI into product design.",
    thumbnail: "/assets/thumbnails/pdf-placeholder.svg",
    type: "PDF",
  },
  {
    id: "3",
    title: "User Research Techniques Workshop",
    slug: "user-research-techniques-workshop",
    description: "A recorded video workshop on best practices in user research.",
    thumbnail: "/assets/thumbnails/video-placeholder.svg",
    type: "Video",
  },
  {
    id: "4",
    title: "Building Effective Roadmaps",
    slug: "building-effective-roadmaps",
    description: "Learn how to build effective and actionable product roadmaps.",
    thumbnail: "/assets/thumbnails/slide-deck-placeholder.svg",
    type: "Slide Deck",
  },
];

export default function ContentPage() {
  const contentAssets = exampleContentAssets;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-left">Content Library 📚</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
        {contentAssets.map((asset) => (
          <Link href={`/content/${asset.slug}`} key={asset.id} legacyBehavior passHref>
            <a className="group">
              <Card className="overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105 shadow-lg rounded-lg">
                <div className="relative h-48">
                  {/* <Image
                    src={asset.thumbnail}
                    alt={asset.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  /> */}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {asset.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm text-muted-foreground">
                    {asset.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center px-4 py-2 bg-gray-50">
                  <p className="text-xs text-muted-foreground">{asset.type}</p>
                </CardFooter>
              </Card>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}