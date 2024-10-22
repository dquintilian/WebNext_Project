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
import { exampleContentAssets } from "@/components/products/contentList";

export default function ContentPage() {
  const contentAssets = exampleContentAssets;
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-left">Content Library 📚</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
        {contentAssets.map((asset) => (
          <Link href={`/content/${asset.id}`} key={asset.id} legacyBehavior passHref>
            <div className="group cursor-pointer">
              <Card className="overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105 shadow-lg rounded-lg">
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}