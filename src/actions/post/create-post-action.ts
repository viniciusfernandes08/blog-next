'use server'

import { makePartialPublicPost, PublicPostModel } from "@/dto/post/dto"
import { PostCreateSchema } from "@/lib/posts/validations";
import { PostModel } from "@/models/post/post-model";
import { handleZodErrors } from "@/utils/handle-zod-errors";

type CreatePostActionState = {
  formState: PublicPostModel;
  errors: string[];
}

export async function createPostAction(
    prevState: CreatePostActionState,
    formData: FormData,
): Promise<CreatePostActionState> {
    if(!(formData instanceof FormData)) {
        return {
            formState: prevState.formState,
            errors: ['Dados inválidos']
        }
    }

    const formDataToObj = Object.fromEntries(formData.entries())
    const zodParsedObj = PostCreateSchema.safeParse(formDataToObj)

    if (!zodParsedObj.success) {
        const errors = handleZodErrors(zodParsedObj.error.format())
        return {
            errors,
            formState: makePartialPublicPost(formDataToObj)
        }
    }

    const validPostData = zodParsedObj.data
    const newPost: PostModel = {
        ...validPostData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        id: Date.now().toString(),
        slug: Math.random().toString(36),
    }
    
    return {
        formState: newPost,
        errors: [],
    }
}