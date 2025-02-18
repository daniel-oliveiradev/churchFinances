import { AtSign, CircleUserRound, Lock, UserRound } from "lucide-react";
import { Logo } from "../components/Logo";
import { SingUpPhone } from "../components/SingUpPhone";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { PasswordInput } from "../components/PasswordInput";

export function SingUp(){
  return(
    <div className="flex items-center justify-center h-screen  bg-lightBlue-50" >
      <div className="flex items-center gap-25 shadow-xl border-1 border-zinc-300 rounded-xl px-25 py-15 bg-zinc-50">
        <div className="flex flex-col gap-6 ">
          <div>
            <h1 className="mb-3 text-4xl font-bold text-zinc-700">Cadastre-se</h1>
            <span className="text-sm text-zinc-500">Faça seu cadastro gratuitamente abaixo</span>
          </div>
          <form className="w-md flex flex-col gap-8">
            <Input
              id="name"
              type="text"
              label="Nome"
              placeholder="Digite o nome completo"
            >
              <UserRound className="w-5 h-5 text-zinc-500"/>
            </Input>
            <Input
              id="email"
              type="email"
              label="E-mail"
              placeholder="Digite um e-mail"
            >
              <AtSign className="w-5 h-5 text-zinc-500"/>
            </Input>
            <Input
              id="nickname"
              type="text"
              label="Usuário"
              placeholder="Digite o nome de usuário"
            >
              <CircleUserRound className="w-5 h-5 text-zinc-500"/>
            </Input>
            <PasswordInput
              id="password"
              label="Senha"
              placeholder="Digite sua senha"
            >
              <Lock className="w-5 h-5 text-zinc-500"/>
            </PasswordInput>

            <Button 
              label="Cadastrar"
              color="purple"
              onClick={() => {} }
              padding="3"
            />
          </form>
        </div>
        
        <div className="w-0.5 h-150 bg-zinc-300"/>

        <div className="flex flex-col items-center gap-6 ">
          <Logo/>
          <h2 className="font-regular text-zinc-500">Cadastre-se agora e comece a gerir as finançãs de sua igreja.</h2>
          <SingUpPhone/>
        </div>
      </div>
    </div>
  )
}