'use client'

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { InputCheckbox } from "@/components/InputCheckbox";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";

export function ManagePostForm() {
    const [contentValue, setContentValue] = useState('Esse é **um** exemplo')

    return (
        <form className="mb-16">
            <div className="flex flex-col gap-5">
              <Input
                labelText="Nome"
                placeholder="Digite seu nome"
                type="password" 
              />
        
              <Input
                labelText="Sobrenome"
                placeholder="Digite seu sobrenome" 
              />
        
              <InputCheckbox
                labelText="Sobrenome" 
              />

              <MarkdownEditor
                labelText="Conteúdo"
                disabled={false}
                textAreaName="content"
                value={contentValue}
                setValue={setContentValue} 
              />
        
              <Input
                disabled
                labelText="Sobrenome"
                readOnly 
              />
        
              <Input
                labelText="Sobrenome"
                placeholder="Digite seu sobrenome"
                defaultValue="Olá mundo"
                readOnly 
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