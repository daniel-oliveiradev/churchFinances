import { Settings, Users } from "lucide-react";

export function Dashboard(){
  return(
   <div className=" h-screen bg-lightBlue-50">
    <header className=" ml-14 p-2 h-25 flex items-center justify-between bg-zinc-50 shadow-md ">
      <div className="flex flex-col ml-2 ">
        <span className="text-2sm text-zinc-700">Seja bem-vindo</span>
        <h1 className="text-2xl text-zinc-700 font-semibold">Daniel Oliveira</h1>
      </div>

      <div className="flex items-center gap-4">
        <Settings className="w-5 h-5 text-zinc-500 hover:text-zinc-700 transition-colors"/>
        <a href="">
          <img 
            className="w-15 h-15 rounded-full border-2 border-zinc-100 shadow-xl"
            src="https://github.com/daniel-oliveiradev.png" 
            alt="avatar do usuário" 
          />
        </a>
      </div>
    </header>
    <div className="ml-14 p-5"> 
      <h2 className="text-3xl text-zinc-700 font-bold">Dashboard</h2>
      <main className=" grid grid-cols-4 gap-5  mt-3">
        <div className=" h-80 border-2 border-zinc-300 rounded-md p-5 bg-zinc-50 shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl text-zinc-700 font-semibold">Título do Cartão</h2>
              <p className="text-sm text-zinc-500 font-regular">Subtítulo do cartão</p>
            </div>

            <Users/>
          </div>
        </div>
      
      </main>
    </div>
    
    <footer className="fixed ml-14 h-14 bottom-0 w-full p-2 flex items-center justify-center border-t-2 border-zinc-200">
      <span className="text-xs " >Todos os direitos reservados © </span>
    </footer>
   </div> 
  )
}