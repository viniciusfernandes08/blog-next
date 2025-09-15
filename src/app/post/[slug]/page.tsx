import { findBySlugCached } from "@/lib/posts/queries";
import { notFound } from "next/navigation";

interface PostSlugPageProps {
  params: Promise<{ slug: string}>
}

export default async function PostSlugPage({params}: PostSlugPageProps) {
    const { slug } = await params

    let post;

    try {
      post = await findBySlugCached(slug)
    } catch {
      post = undefined
    }

    if(!post) notFound()

    return (
      <div className="w-full h-full">
        <h1>{post.title}</h1>
      </div>
    )
}