import { findAllPublicPostsCached } from "@/lib/posts/queries/public"
import { PostImage } from "../PostImage"
import { PostSummary } from "../PostSummary"
import { ErrorMessage } from "../ErrorMessage"

export async function FeaturedPost() {
    const posts = await findAllPublicPostsCached()

    if(posts.length <= 0) {
      return (
        <ErrorMessage 
          contentTitle="Ops 😅" 
          content="Ainda não criamos nenhum post" 
        />
      )
    } 

    const post = posts[0]

    const postUrl = `post/${post.slug}`

    return (
        <section className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 group">
            <PostImage 
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
                priority: true,
              }}
              
              linkProps={{
                href: postUrl
              }}
            />
            
            <PostSummary
              postLink={postUrl}
              postHeading='h1'
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />
        </section>
    )
}