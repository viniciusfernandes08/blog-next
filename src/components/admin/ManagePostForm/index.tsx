'use client'

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { InputCheckbox } from "@/components/InputCheckbox";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useActionState, useState } from "react";
import { ImageUploader } from "../ImageUploader";
import { makePartialPublicPost, PublicPostModel } from "@/dto/post/dto";
import { createPostAction } from "@/actions/post/create-post-action";

type Props = {
  publicPost?: PublicPostModel
}

export function ManagePostForm({ publicPost }: Props) {
  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  }
  const [state, action, isPending] = useActionState(
    createPostAction, 
    initialState
  )
  const { formState } = state
  const [contentValue, setContentValue] = useState(publicPost?.content || '')

    return (
        <form action={action} className="mb-16">
            <div className="flex flex-col gap-5">
              <Input
                labelText="ID"
                name="id"
                placeholder="ID gerado automaticamente"
                type="text"
                defaultValue={formState.id}
                readOnly 
              />

              <Input
                labelText="Slug"
                name="slug"
                placeholder="Slug gerada automaticamente"
                type="text"
                defaultValue={formState.slug}
                readOnly 
              />

              <Input
                labelText="Autor"
                name="author"
                placeholder="Digite o nome do autor"
                type="text"
                defaultValue={formState.author}
              />

              <Input
                labelText="Título"
                name="title"
                placeholder="Digite o título"
                type="text"
                defaultValue={formState.title}
              />

              <Input
                labelText="Excerto"
                name="excerpt"
                placeholder="Digite o resumo"
                type="text"
                defaultValue={formState.excerpt}
              />

              <MarkdownEditor
                labelText="Conteúdo"
                value={contentValue}
                setValue={setContentValue}
                textAreaName="content"
                disabled={false} 
              />

              <ImageUploader />

              <Input
                labelText="Url da imagem de capa"
                name="coverImageUrl"
                placeholder="Digite a URL da imagem"
                type="text"
                defaultValue={formState.coverImageUrl}
              />

              <InputCheckbox
                labelText="Publicar?"
                name="published"
                type="checkbox" 
                defaultChecked={formState.published}
              />
        
              <div className="mt-4">
                <Button type="submit" variant="default">
                  Enviar
                </Button>
              </div>
            </div>
        </form>
    )
}