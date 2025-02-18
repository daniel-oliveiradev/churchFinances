import { CircleMinus, CirclePlus, HomeIcon, Settings2, Users } from "lucide-react"
import logoIcon from "../images/logo/logo-icon.svg"

export function SideMenu(){
  return(
    <aside className=" fixed flex flex-col gap-8 items-center p-2 w-14 h-screen z-30 border-r-1 border-zinc-300 bg-zinc-50">
    <a href="#">
      <img 
        src={logoIcon} 
        alt="logo do sistema" 
      />
    </a>
    <nav className="flex flex-col gap-6"  >
      <a href="#">
      <HomeIcon className ="w-5 h-5 text-zinc-500 hover:text-zinc-800 transition-colors"/>
      </a>
      <a href="#">
      <Users className ="w-5 h-5 text-zinc-500 hover:text-zinc-800 transition-colors"/>
      </a>
      <a href="#">
      <CirclePlus className ="w-5 h-5 text-zinc-500 hover:text-zinc-800 transition-colors"/>
      </a>
      <a href="#">
      <CircleMinus className ="w-5 h-5 text-zinc-500 hover:text-zinc-800 transition-colors"/>
      </a>
      <a href="#">
      <Settings2 className ="w-5 h-5 text-zinc-500 hover:text-zinc-800 transition-colors"/>
      </a>
    </nav>
  </aside>
  )
}