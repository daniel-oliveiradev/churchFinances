import logoIcon from "../images/logo/logo-icon.svg"

export function Logo(){
  return(
    <div className="flex gap-2 items-center justify-center">
      <img src={logoIcon} alt="logo de finanças referente ao site" />
      <h1 className="text-4xl font-bold text-zinc-700">Finances</h1>
    </div>
  )
}