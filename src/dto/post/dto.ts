import { PostModel } from "@/models/post/post-model";

export type PublicPostModel = Omit<PostModel, 'updatedAt'>

export const makePublicPost = (post: PostModel): PublicPostModel => {
  return {
    id: post.id,
    slug: post.slug,
    author: post.author,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    coverImageUrl: post.coverImageUrl,
    createdAt: post.createdAt,
    published: post.published,
  }
}