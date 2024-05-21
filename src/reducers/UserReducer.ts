import { useReducer } from "react"
import { useEffect } from 'react'
import axios from 'axios'
import { ActionType, InitialState } from "../@types/Types"

function reduce (state: InitialState, action: ActionType ): InitialState {
    switch(action.type){
        case "ADD":
            return {
                ...state,
                Countries: action.payload,
                status: "Ready"
            }
        case "Error":
            return {
                ...state,
                status: "Ready",
                error: action.payload.message
            }
        case "CHANGETHEME":
            return {
                ...state,
                theme: state.theme == "light" ? "dark": "light"
            }
        default:
            return state 
    }
}

const initialState: InitialState = {
    Countries: [],
    error: "",
    status: "Loading",
    theme: "light"
}
export const UseReducer = () => {
  
    const [state, dispatch] = useReducer(reduce,initialState)

    useEffect(()=>{
        axios.get("https://")
        .then(response => {
            dispatch({type: "ADD", payload: response.data})
        })
        .catch( error => {
            dispatch({type: "Error", payload: error})
        })

    },[])
    return {state,dispatch}
}
