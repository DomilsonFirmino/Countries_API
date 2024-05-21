import { ReactNode, createContext, useState } from "react"
import { Theme,User} from "../@types/Types"

export const themeS = createContext<User>({name: "light",setName: ()=>{}})

export const GeneralTheme = ({children}:{children: ReactNode}) => {
    const [user, setUser] = useState<Theme>("light")
    return (
        <themeS.Provider value={{name: user, setName: setUser}}>
            {children}
        </themeS.Provider>
    )
}
