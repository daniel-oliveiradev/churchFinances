import { Header } from "./components/Header"
import { SideMenu } from "./components/SideBar"
// import { Dashboard } from "./pages/Dashboard"
// import { SingIn } from "./pages/SingIn"
// import { SingUp } from "./pages/SingUp"
import { Tithers } from "./pages/Tithers"


export function App(){
  return(
    <div>
      {/* <SingIn/>
      <SingUp/> */}

      <SideMenu/>
      <Header/>
      <Tithers/>
      
     
    </div>
  )
}