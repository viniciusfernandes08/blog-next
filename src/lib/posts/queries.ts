import { postRepository } from "@/repositories/post";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPosts = cache(
  async() => await postRepository.findAll()
)

export const findBySlugCached = cache(
  async(slug: string) => {
    const post = await postRepository.findBySlug(slug)

    if(!post) notFound()

    return post 
  }
)

export const findByIdCached = cache(
  async(id: string) => await postRepository.findById(id)
)