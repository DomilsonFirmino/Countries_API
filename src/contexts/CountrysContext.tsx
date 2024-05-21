import { Dispatch, ReactNode, createContext } from "react"
import { ActionType, InitialState } from "../@types/Types"
import { UseReducer } from "../reducers/UserReducer"

type Props = {
  state: InitialState,
  dispatch: Dispatch<ActionType>
}
export const countrys = createContext<Props | undefined>(undefined)

export const CountrysContext = ({children}:{children: ReactNode}) => {
    
    const {state,dispatch} = UseReducer()
    return (
        <countrys.Provider value={{state,dispatch}}>
          {children}
        </countrys.Provider>
    )
}
