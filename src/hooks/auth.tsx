import { createContext, useEffect, useState, type ReactNode } from "react";
import { api } from "../services/api";

interface SingInProps{
  nickname: string,
  password: string
}


export const AuthContext = createContext({})

function AuthProvider(children: ReactNode){
  const [data, setData] = useState({})
  
  async function singIn({ nickname, password }: SingInProps){
    try {
      const response = await api.post("/session", { nickname, password});
      const { user, token } = response.data

      localStorage.setItem("@churchfinances:user", JSON.stringify(user))
      localStorage.setItem("@churchfinances:token", token)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setData({ user, token })

    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possível entrar")
      }
    }
  }

  function singOut(){
    localStorage.removeItem("@churchfinances:token")
    localStorage.removeItem("@churchfinances:user")

    setData({})
  }
  
  useEffect(() => {
    const token = localStorage.getItem("@churchfinances:token")
    const user = localStorage.getItem("@churchfinances:user")
  
    if(token && user){
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  
  
  return(
    <AuthContext.Provider
      value={{
        singIn, 
        singOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}