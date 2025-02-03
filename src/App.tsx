import { SideMenu } from "./components/SideBar"
import { Dashboard } from "./pages/Dashboard"
import { SingIn } from "./pages/SingIn"
import { SingUp } from "./pages/SingUp"

export function App(){
  return(
    <div>
      <SideMenu/>
      <Dashboard/>

     
    </div>
  )
}