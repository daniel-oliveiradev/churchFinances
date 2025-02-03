import { Lock, User } from "lucide-react"
import { Logo } from "../components/Logo"
import { SingInPhone } from "../components/SingInPhone"

export function SingIn(){
  return(
    <div className="flex items-center justify-center h-screen  bg-lightBlue-50" >
      <div className="flex items-center gap-25 shadow-xl border-1 border-zinc-300 rounded-xl px-25 py-15 bg-zinc-50">
        <div className="flex flex-col items-center gap-6 ">
          <Logo/>
          <h2 className="font-regular text-zinc-500">Cadastre-se agora e comece a gerir as finançãs de sua igreja.</h2>
          <SingInPhone/>
        </div>

        <div className="w-0.5 h-150 bg-zinc-300"/>

        <div className="flex flex-col gap-6 ">
          <h1 className="mb-3 text-4xl font-bold text-zinc-700">Sing-in</h1>
          <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-lg flex flex-col gap-1">
                <label htmlFor="nickname" className="text-zinc-600 font-semibold"> E-mail </label>
                <div className="w-auto flex gap-3 items-center p-3 border-1 border-zinc-200 rounded-md">
                  <User className="w-5 h-5 text-zinc-500"/>
                  <input className="outline-0 w-full text-zinc-700" type="text" id="ninckname" placeholder="Nome de usuário"/>
                </div>
              </div>
              <div className="w-lg flex flex-col gap-1">
                  <label htmlFor="password" className="text-zinc-600 font-semibold"> Senha </label>
                  <div className="w-auto flex gap-3 items-center p-3 border-1 border-zinc-200 rounded-md">
                    <Lock className="w-5 h-5 text-zinc-500"/>
                    <input className="outline-0 w-full text-zinc-700" type="password" id="password" placeholder="Digite sua senha"/>
                  </div>
              </div>
            </div>
            
          <button type="submit" className="bg-purple font-light text-xl rounded-md p-3 cursor-pointer hover:bg-purble-hover transition-all text-zinc-50">Entrar</button>
          </form>

          <span className="text-zinc-500 mt-5">Não tem conta? <a href="#" className="font-semibold text-zinc-700 hover:text-purple transition-all">Cadastre-se agora</a></span>
        </div>
      </div>
    </div>
)
}