'use client'

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { InputCheckbox } from "@/components/InputCheckbox";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";
import { ImageUploader } from "../ImageUploader";

export function ManagePostForm() {
    const [contentValue, setContentValue] = useState('Esse é **um** exemplo')

    return (
        <form className="mb-16">
            <div className="flex flex-col gap-5">
              <Input
                labelText="ID"
                name="id"
                placeholder="ID gerado automaticamente"
                type="text"
                defaultValue={''}
                readOnly 
              />

              <Input
                labelText="Slug"
                name="slug"
                placeholder="Slug gerada automaticamente"
                type="text"
                defaultValue={''}
                readOnly 
              />

              <Input
                labelText="Autor"
                name="author"
                placeholder="Digite o nome do autor"
                type="text"
                defaultValue={''}
              />

              <Input
                labelText="Título"
                name="title"
                placeholder="Digite o título"
                type="text"
                defaultValue={''}
              />

              <Input
                labelText="Excerto"
                name="excerpt"
                placeholder="Digite o resumo"
                type="text"
                defaultValue={''}
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
                defaultValue={''}
              />

              <InputCheckbox
                labelText="Publicar?"
                name="published"
                type="checkbox" 
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