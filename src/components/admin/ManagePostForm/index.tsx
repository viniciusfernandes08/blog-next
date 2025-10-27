import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { InputCheckbox } from "@/components/InputCheckbox";

export function ManagePostForm() {
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