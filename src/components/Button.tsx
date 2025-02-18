import type { FunctionComponent, ReactNode } from "react";

interface ButtonProps{
  children?: ReactNode,
  label?: string,
  color: "purple" | "cancel" | "destructive",
  padding: string
  onClick: () => void
}

export const Button: FunctionComponent<ButtonProps> = ({children, label, color, padding, onClick, ...rest}) => {
  return(
    <button
      className={`p-${padding} flex items-center justify-center gap-2 cursor-pointer rounded-md transition-colors
        ${color === "purple" ? "bg-purple hover:bg-purble-hover text-zinc-50" : 
          color === "cancel" ? "border-1 border-zinc-300 text-zinc-700" : 
          color === "destructive" ? "bg-lightRed hover:bg-lightRed-hover text-zinc-50" : ""}`}
      onClick={onClick}
      {...rest}
    >
      {children}
      <span>{label}</span>
    </button>
  )
}