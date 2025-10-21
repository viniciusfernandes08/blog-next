import { findAllPostAdmin } from "@/lib/posts/queries/admin"
import { Trash2Icon } from "lucide-react"
import Link from "next/link"

export default async function PostsListAdmin() {
    const posts = await findAllPostAdmin()

    return (
      <div className="pt-16 text-6xl">
        {posts.map(post => {
            return (
              <div key={post.id} 
                className={`${!post.published && 'bg-slate-300'} flex gap-2 
                  items-center justify-between py-2 px-2`}>

                <Link href={`admin/post/${post.id}`}>{post.title}</Link>

                {!post.published && (
                  <p className="text-xs text-slate-600 italic">(Não publicado)</p>
                )}

                {/* para pegar o svg dentro do button pode fazer com [&_svg]: */}
                <button 
                  className="text-red-500 cursor-pointer [&_svg]:w-4 [&_svg]:h-4
                    hover:scale-120 hover:text-red-700"
                  aria-label={`Apagar post: ${post.title}`}
                  title={`Apagar post: ${post.title}`}
                  >
                  <Trash2Icon />
                </button>
              </div>
            )
        })}
      </div>
    )
}