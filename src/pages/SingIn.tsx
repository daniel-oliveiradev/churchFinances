import { Lock, User } from "lucide-react"
import { Logo } from "../components/Logo"
import { SingInPhone } from "../components/SingInPhone"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function SingIn(){
  return(
    <div className="flex items-center justify-center h-screen  bg-lightBlue-50" >
      <div className="flex items-center gap-25 shadow-xl border-1 border-zinc-300 rounded-xl px-25 py-15 bg-zinc-50">
        <div className="flex flex-col items-center gap-6 ">
          <Logo/>
          <h2 className="font-regular text-zinc-500 w-md text-center">Comece a gerir as finanças de sua igreja agora mesmo, faça login ou cadastre-se.</h2>
          <SingInPhone/>
        </div>

        <div className="w-0.5 h-150 bg-zinc-300"/>

        <div className="flex flex-col gap-6 ">
          <h1 className="mb-3 text-4xl font-bold text-zinc-700">Sing-in</h1>
          <form className="flex flex-col gap-8">
            <div className="w-md flex flex-col gap-4">
              <Input
                id="user"
                label="Usuário"
                placeholder="Nome de usuário"
                type="text"
                size="full"
              >
                <User className="w-5 h-5 text-zinc-500"/>
              </Input>
              
              <Input
                id="password"
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                size="full"
              >
                <Lock className="w-5 h-5 text-zinc-500"/>
              </Input>
            </div>

            <Button 
              label="Entrar"
              color="purple" 
              padding="3"
              onClick={() => {} }
            />
          </form>

          <span className="text-zinc-500 mt-5">Não tem conta? <a href="#" className="font-semibold text-zinc-700 hover:text-purple transition-all">Cadastre-se agora</a></span>
        </div>
      </div>
    </div>
)
}