import { findBySlugCached } from "@/lib/posts/queries";
import { Metadata } from "next";

interface PostSlugPageProps {
  params: Promise<{ slug: string}>
}

export async function generateMetadata({params}: PostSlugPageProps): Promise<Metadata> {
  const {slug} = await params

  const post = await findBySlugCached(slug)

  return {
    title: post.title,
    description: post.excerpt
  }
}

export default async function PostSlugPage({params}: PostSlugPageProps) {
    const { slug } = await params

    const post = await findBySlugCached(slug)

    return (
      <div className="w-full h-full">
        <h1>{post.title}</h1>
      </div>
    )
}