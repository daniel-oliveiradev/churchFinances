import { Eye, EyeClosed } from "lucide-react";
import { useState, type FunctionComponent, type ReactNode } from "react";

interface InputProps{
  id: string
  children: ReactNode
  label?: string
  placeholder?: string
  textSize?: string
}

export const PasswordInput: FunctionComponent<InputProps> = ({children, textSize, placeholder, label, id,  ...rest }) => {
  const[isShow, setIsShow] = useState(false)
   
  return(
    <div className="flex flex-col gap-1">
      <label 
        htmlFor={id}
        className="text-zinc-600 font-semibold mt-2"
      >
        {label}
      </label>
      <div className="flex items-center justify-between border-1 border-zinc-300 rounded-md p-3">
        <div className="flex items-center gap-2 ">
          {children}
          <input 
            className={`w-xs outline-0 text-${{textSize}} text-zinc-700`}
            placeholder={placeholder} 
            type= {!isShow ? "password" : "text"}
            id={id}
            {...rest}
          />
        </div>
        <button 
          className="cursor-pointer outline-0 border-l-1 border-zinc-300"
          onClick={() => setIsShow(!isShow)} 
          type="button"
        >
          {!isShow ? <EyeClosed className="text-zinc-700 w-5 h-5 ml-2"/> : <Eye className="text-zinc-700 align-text-top w-5 h-5 ml-2"/> }
        </button>
      </div>
    </div>
  )
}