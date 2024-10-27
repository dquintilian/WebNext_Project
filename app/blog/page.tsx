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

import { createClient, EntrySkeletonType } from 'contentful';



const spaceId = "h02wmcwkik29";
const accessToken = "8PMsoE3EtqxriO3oUJcPFdPGb_EMYAfvLfGU632B44s";
if (!spaceId || !accessToken) {
  throw new Error('Contentful environment variables are not set');
}

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
  environment: "master",
});

interface BlogPost extends EntrySkeletonType {
  sys: any
  fields: {
    articleTitle: string
    articleBody?: string
  }
}

function isString(value: unknown): value is string {
  return typeof value === 'string'
}

async function fetchAllArticles(): Promise<BlogPost[]> {
  try {
    const entries: EntryCollection<BlogPost> = await client.getEntries<BlogPost>({
      content_type: 'article',
    })

    if (!entries || !entries.items) {
      console.error('No items found in the response')
      return []
    }

    return entries.items.map((entry: Entry<BlogPost>) => ({
      sys: entry.sys,
      fields: {
        articleTitle: isString(entry.fields.articleTitle) ? entry.fields.articleTitle : 'Untitled',
        articleBody: isString(entry.fields.articleBody) ? entry.fields.articleBody : undefined,
      },
      contentTypeId: 'article',
    }))
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadArticles() {
      const articles = await fetchAllArticles()
      setBlogPosts(articles)
      setIsLoading(false)
    }

    loadArticles()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

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
  )
}