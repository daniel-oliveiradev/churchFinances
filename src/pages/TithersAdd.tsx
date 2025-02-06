import { Pencil, SearchIcon, Trash2, User, UserCheck2Icon, UserRoundPlus } from "lucide-react";

export function TithersAdd(){
  return(
    <div className="ml-14 p-5 bg-lightBlue-50 h-screen"> 
      <div className="flex items-center gap-3 mt-20">
        <div className=" min-h-198 p-6 bg-zinc-50 border-1 border-zinc-200 rounded-md shadow">
          <div className=" mb-8 flex items-center justify-between">
            <h1 className="text-3xl text-zinc-700 font-bold">Cadastro de membros</h1>
            <UserRoundPlus className="w-8 h-8 text-zinc-700"/>
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="w-md flex flex-col gap-1">
                  <label htmlFor="name" className="text-zinc-600 font-semibold"> Nome </label>
                    <div className="w-auto flex gap-3 items-center p-3 border-1 border-zinc-300 rounded-md">
                      <User className="w-5 h-5 text-zinc-500"/>
                      <input className="outline-0 w-full text-zinc-700" type="text" id="name" placeholder="Digite o nome completo"/>
                    </div>
                </div>
              </div> 
              <button type="submit" className="w-43 bg-purple rounded-md p-3 cursor-pointer hover:bg-purble-hover transition-colors text-zinc-50">Cadastrar membro</button>
            </form>

            <img 
              className="w-sm h-sm mt-15"
              src="/register.png" 
              alt="" 
            />
          </div>
        </div>

        <div className=" min-h-198 w-full p-6 bg-zinc-50 border-1 border-zinc-200 rounded-md shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <h1 className="text-3xl text-zinc-700 font-bold">Membros cadastrados</h1>
              <div className="flex items-center gap-2 border-1 border-zinc-300 rounded-md p-2">
                <SearchIcon className="w-4 h-4 text-zinc-700"/>
                <input 
                  className="w-xs outline-0 text-sm text-zinc-700"
                  type="text"
                  placeholder="Digite o nome de um membro" 
                />
              </div>
            </div>
            
            <UserCheck2Icon className="w-8 h-8 text-zinc-700"/>           
          </div>

          <div className="grid grid-cols-2 gap-2 items-center ">
            <div className="p-4 border-1 border-zinc-300 rounded-md mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-zinc-700">Daniel Oliveira</h2>
                  <div className="flex flex-col mt-2">
                    <span className="text-sm text-zinc-500">Criado em: 25/04/2024</span>
                    <span className="text-sm text-zinc-500" >Modificado em: 25/04/2024</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <button className="flex items-center gap-2 bg-purple p-2 text-zinc-50 text-sm rounded-md cursor-pointer hover:bg-purble-hover transition-colors">
                    <Pencil className="w-5 h-5"/>
                    <span>Editar</span>
                  </button>
                  <button className="flex items-center gap-2 bg-lightRed text-zinc-50 p-2 text-sm rounded-md cursor-pointer hover:bg-lightRed-hover transition-colors">
                    <Trash2 className="w-5 h-5"/>
                    <span>Excluir</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4 border-1 border-zinc-300 rounded-md mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-zinc-700">Hortência Santos Prado Oliveira</h2>
                  <div className="flex flex-col mt-2">
                    <span className="text-sm text-zinc-500">Criado em: 25/04/2024</span>
                    <span className="text-sm text-zinc-500" >Modificado em: 25/04/2024</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <button className="flex items-center gap-2 bg-purple p-2 text-zinc-50 text-sm rounded-md cursor-pointer hover:bg-purble-hover transition-colors">
                    <Pencil className="w-5 h-5"/>
                    <span>Editar</span>
                  </button>
                  <button className="flex items-center gap-2 bg-lightRed text-zinc-50 p-2 text-sm rounded-md cursor-pointer hover:bg-lightRed-hover transition-colors">
                    <Trash2 className="w-5 h-5"/>
                    <span>Excluir</span>
                  </button>
                </div>
              </div>
            </div>

            
          </div>
        </div>

      </div>
    </div>
  )
}