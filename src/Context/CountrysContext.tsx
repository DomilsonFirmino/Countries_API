import axios, { AxiosError } from "axios"
import { createContext, useContext, useEffect, useState } from "react"
import { country } from "../@types/Types"


type Props = {
  countrys: country[],
  isLoading: boolean,
  error: string,
  status: "ready" | "error" | "standby"
}

const initialState:Props = {
  countrys: [],
  isLoading: false,
  error: "",
  status: "standby"
}

const CountrysContext = createContext(initialState)

export const CountrysProvider = ({children}:{children: React.ReactNode}) => {
  
  const [countrys,setCountrys] = useState<country[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"ready" | "error" | "standby">("standby")
  const [error, setError] = useState("")

  useEffect(()=>{
    const FetchData = async ()=>{
      setIsLoading(true)
      setStatus("standby")
      setError("")
      try {
        const response = await axios.get<country[]>("https://restcountries.com/v3.1/all");
        setCountrys(response.data)
        setStatus("ready")
      } catch (error) {
        const e = error as AxiosError
        setStatus("error")
        setError(e.message ?? e.name)
      }finally{
        setIsLoading(false)
      }
    }

    FetchData()
  },[])

  return (
    <CountrysContext.Provider value={{countrys,isLoading,error,status}}>
      {children}
    </CountrysContext.Provider>
  )
}


export const useCountrysContext = () =>  useContext(CountrysContext);