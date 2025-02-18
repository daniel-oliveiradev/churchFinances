import { Users } from "lucide-react";

export function Dashboard(){
  return(
   <div className=" h-screen bg-lightBlue-50">
    
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
    
    <footer className="fixed ml-14 h-14 bottom-0 w-full p-2 flex flex-col items-center justify-center border-t-2 border-zinc-200">
      <span className="text-xs text-zinc-500" >Todos os direitos reservados © </span>
      <a className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors" href="https://storyset.com/money">Illustrations by Storyset</a>
    </footer>
   </div> 
  )
}