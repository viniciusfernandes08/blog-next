import { PostImage } from "../PostImage"
import { PostSummary } from "../PostSummary"
import { findAllPublicPosts } from "@/lib/posts/queries"

export async function PostsList() {
    const posts = await findAllPublicPosts()
    
    return (
      <div className="grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 lg:grid-cols-3">
       {posts.slice(1).map((post) => {
        const postLink = `post/${post.slug}`

        return ( 
          <div 
            className="flex flex-col group gap-4" 
            key={post.id}>
              <PostImage 
                imageProps={{
                  width: 1200,
                  height: 720,
                  src: post.coverImageUrl,
                  alt: post.title,
                }}
                
                linkProps={{
                  href: postLink,
                }}
              />

              <PostSummary
                postLink={postLink}
                postHeading='h2' 
                createdAt={post.createdAt}
                excerpt={post.excerpt}
                title={post.title}
              />
          </div>
        )
       })}
      </div>
    )
}