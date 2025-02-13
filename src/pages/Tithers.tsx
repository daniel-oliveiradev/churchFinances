import { useState } from "react";

import { Pencil, Plus, SearchIcon, Trash2, UserCheck2Icon, UserRound } from "lucide-react";
import { Modal } from "../components/Modal";
import { Input } from "../components/Input";
import { Button } from "../components/Button";


export function Tithers(){
  const [open, setOpen] = useState(false)
  
  return(
    <div className="ml-14 p-5 bg-lightBlue-50 h-screen"> 
      <div className="flex items-center gap-3 mt-20">
        <div className=" min-h-198 max-h-198 w-full p-6 bg-zinc-50 border-1 border-zinc-200 rounded-md shadow overflow-y-scroll [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-thumb]:rounded-full
          dark:[&::-webkit-scrollbar-track]:bg-zinc-50
          dark:[&::-webkit-scrollbar-thumb]:bg-purble-hover">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-8">
              <h1 className="text-3xl text-zinc-700 font-bold">Membros cadastrados</h1>
              
              <Input 
                id="name"
                type="text"
                placeholder="Digite o nome de um membro"
                textSize="sm"
                size="xs"
              >
                <SearchIcon className="w-4 h-4 text-zinc-700"/>
              </Input>
              
              <Button
                label="Novo membro"
                color="purple"
                padding="3"
                onClick={() => setOpen(true)}
              >
                <Plus className="w-5 h-5"/>
              </Button>
              
              <Modal open={open} >
                <h2 className="text-2xl text-zinc-700 font-bold">Cadastro de membro</h2>
            
                <div className="mt-5 flex flex-col ">
                  <Input
                    id="name"
                    type="text"
                    label="Nome"
                    placeholder="Digite o nome completo"
                    size="lg"
                  >
                    <UserRound className="text-zinc-600"/>
                  </Input>
                  

                  <div className="flex items-center gap-2 mt-8">
                    <Button
                      label="Salvar"
                      color="purple"
                      padding="2"
                      onClick={() => {} }
                    />
                    <Button
                      label="Cancelar"
                      color="cancel"
                      padding="2"
                      onClick={() => setOpen(false)}
                    />
                  </div>
                </div>
              </Modal>
            </div>
            
            <UserCheck2Icon className="w-8 h-8 text-zinc-700"/>           
          </div>

          <div className="grid grid-cols-4 gap-2 items-center ">
            <div className="p-4 border-1 border-zinc-300 rounded-md mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-zinc-700">Daniel Oliveira</h2>
                  <div className="flex flex-col mt-2">
                    <span className="text-sm text-zinc-500">Criado em: 25/04/2024</span>
                    <span className="text-sm text-zinc-500" >Modificado em: 25/04/2024</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    label="Editar"
                    color="purple"
                    padding="2"
                    onClick={() => {} }
                  >
                    <Pencil className="w-5 h-5"/>
                  </Button>

                  <Button
                    label="Excluir"
                    color="destructive"
                    padding="2"
                    onClick={() => {} }
                  >
                    <Trash2 className="w-5 h-5"/>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}