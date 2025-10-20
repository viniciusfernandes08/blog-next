import { findAllPostAdmin } from "@/lib/posts/queries/admin"
import { Metadata } from "next"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Post Admin'
}

export default async function AdminPostNewPage() {
    const posts = await findAllPostAdmin()

    return (
      <div className="pt-16">
          {posts.map((post) => {
              return <p key={post.id}>{post.title}</p>
          })}
      </div>
    )
}