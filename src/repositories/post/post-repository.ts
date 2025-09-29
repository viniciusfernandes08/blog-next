import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
    findAll(): Promise<PostModel[]>
    findEverything(): Promise<PostModel[]>
    findById(id: string): Promise<PostModel>
    findBySlugPublic(slug: string): Promise<PostModel>
}