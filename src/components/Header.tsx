import { Settings } from "lucide-react";

export function Header(){
  return(
    <header className="fixed w-full p-2 h-20 flex items-center justify-between bg-zinc-50 border-b-1 border-zinc-200 shadow-md ">
      <div className="flex flex-col ml-17 ">
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
  )
}
