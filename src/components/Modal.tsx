import type { ReactNode, FunctionComponent } from "react"

interface ModalProps {
  open: boolean,
  children: ReactNode
}

export const Modal: FunctionComponent<ModalProps> = ({ open, children }: ModalProps) =>{
  return(
    <div 
      className={`fixed inset-0 flex items-center justify-center transition-colors z-40 ${open ? "visible bg-black/20" : "invisible"}`}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={`bg-zinc-50 p-4 border-1 border-zinc-200 rounded-md shadow transition-all
          ${open ? "scale-100 opacity-100": "scale-125 opacity-0"}`}
      >
        {children}
      </div>
    </div>
  )
}
