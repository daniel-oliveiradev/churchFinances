import { useState } from "react";

import { BadgeDollarSign, CalendarDays, CirclePlus, NotebookText, Pencil, Plus, SearchIcon, Trash2 } from "lucide-react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";

export function Revenues(){
  const [open, setOpen] = useState(false)
  
  return(
    <div className="ml-14 p-5 bg-lightBlue-50 h-screen"> 
      <div className="flex items-center gap-3 mt-20">
        <div className=" min-h-198 max-h-198 w-full p-6 bg-zinc-50 border-1 border-zinc-200 rounded-md shadow overflow-y-scroll [&::-webkit-scrollbar]:w-1.5
          [&::-webkit-scrollbar-track]:rounded-full
          dark:[&::-webkit-scrollbar-track]:bg-zinc-50
          [&::-webkit-scrollbar-thumb]:rounded-full
          dark:[&::-webkit-scrollbar-thumb]:bg-purble-hover"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-8">
              <h1 className="text-3xl text-zinc-700 font-bold">Receitas cadastradas</h1>
              
              <Input 
                id="name"
                type="text"
                placeholder="Digite uma receita"
                textSize="sm"
                size="xs"
              >
                <SearchIcon className="w-4 h-4 text-zinc-700"/>
              </Input>
              
              <Button
                label="Nova receita"
                color="purple"
                padding="3"
                onClick={() => setOpen(true)}
              >
                <Plus className="w-5 h-5"/>
              </Button>
              
              <Modal open={open} >
                <h2 className="text-2xl text-zinc-700 font-bold">Cadastro de receita</h2>
            
                <div className="mt-5 flex flex-col ">
                  <Input
                    id="description"
                    type="text"
                    label="Descrição"
                    placeholder="Digite a descrição"
                    
                  >
                    <NotebookText className="w-5 h-5 text-zinc-600"/>
                  </Input>
                  <div className="flex items-center gap-3">
                    <Input
                      id="date"
                      type="date"
                      label="Data de vencimento"                 
                    >
                      <CalendarDays className="w-5 h-5 text-zinc-600"/>
                    </Input>
                    
                    <Input
                      id="value"
                      type="text"
                      label="Valor"
                      placeholder="Digite o valor"
                      
                    >
                      <BadgeDollarSign className="w-5 h-5 text-zinc-600"/>
                    </Input>
                  </div>
            
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
            
            <CirclePlus className="w-8 h-8 text-zinc-700"/>           
          </div>

          <div className=" mt-8 flex flex-col gap-2 justify-center">
            <div className="flex items-center justify-between border-1 border-zinc-300  rounded-md p-2">
              <h2 className="text-lg text-zinc-700 font-semibold">
                Dízimo dos fiéis
              </h2>
              
              <span className="text-md text-zinc-600">10/05/2025</span>
              <span className="text-md text-zinc-600">R$5000,00</span>

              <div className="flex items-center gap-2">
                <Button
                  color="purple"
                  padding="2"
                  label="Editar"
                  onClick={() => {} }
                >
                  <Pencil className="w-5 h-5"/>
                </Button>

                <Button
                color="destructive"
                padding="2"
                label="Excluir"
                onClick={() => {} }
                >
                  <Trash2 className="w-5 h-5 "/>
                </Button>
              </div>
            </div>

            
          </div>  

        
        
        
        
        
        </div>
      </div>
    </div>
  )
}