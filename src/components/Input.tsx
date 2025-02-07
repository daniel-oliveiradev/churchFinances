import type { FunctionComponent, ReactNode } from "react";

interface InputProps{
  id: string
  type: string
  children: ReactNode
  label?: string
  placeholder?: string
  size?: string
  textSize?: string
}

export const Input: FunctionComponent<InputProps> = ({children, textSize, placeholder, type, label, size, id,  ...rest }) => {
  return(
    <div className="flex flex-col gap-1">
      <label 
        htmlFor={id}
        className="text-zinc-600 font-semibold"
      >
        {label}
      </label>
      <div className="flex items-center gap-2 border-1 border-zinc-300 rounded-md p-3">
        {children}
        <input 
          className={`w-${size} outline-0 text-${textSize} text-zinc-700`}
          placeholder={placeholder} 
          type={type}
          id={id}
          {...rest}
        />
      </div>
    </div>
  )
}