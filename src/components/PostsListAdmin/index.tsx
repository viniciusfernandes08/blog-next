import { findAllPostAdmin } from "@/lib/posts/queries/admin"

export default async function PostsListAdmin() {
    const posts = await findAllPostAdmin()

    return (
      <div className="pt-16 text-6xl">
        {posts.map(post => {
            return <p key={post.id}>{post.title}</p>
        })}
      </div>
    )
}