import { postRepository } from "@/repositories/post";
import { cache } from "react";

export const findByIdAdmin = cache(
  async(id: string) => {
    return await postRepository.findById(id)
  }
)

export const findAllPostAdmin = cache(
  async() => {
    return await postRepository.findAll()
  }
)