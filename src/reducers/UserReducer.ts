import { useReducer } from "react"
import { useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import { ActionType, InitialState, country } from "../@types/Types"

function reduce (state: InitialState, action: ActionType ): InitialState {
    switch(action.type){
        case "ADD":
            return {
                ...state,
                Countries: action.payload,
                Filtered: action.payload,
                status: "Ready"
            }
        case "Error":
            return {
                ...state,
                status: "Ready",
                error: action.payload.message
            }
        case "CHANGETHEME":
            localStorage.setItem("THEME",state.theme == "light" ? "dark": "light")
            document.querySelector("body")?.setAttribute('data-theme', state.theme == "light" ? "dark": "light")
            return {
                ...state,
                theme: state.theme == "light" ? "dark": "light"
            }
        case "FILTERREG":
            const FilterReg = state.Countries.filter( item =>  item.region.toLowerCase() === action.payload.toLowerCase())
            if(action.payload == "none"){
                return{
                    ...state,
                    Filtered: state.Countries
                }
            }else{
                return{
                    ...state,
                    Filtered: FilterReg,
                }
            }
        case "FILTER":
            const Filter = state.Countries.filter( item =>  item.name.official?.toLowerCase().includes(action.payload.toLowerCase()))
            if(action.payload == ""){
                return{
                    ...state,
                    Filtered: state.Countries
                }
            }else{
                return{
                    ...state,
                    Filtered: Filter,
                }
            }
        case "THEME":
            document.querySelector("body")?.setAttribute('data-theme', state.theme = state.theme)
            return{
                ...state,
                theme: action.payload
            }
        default:
            return state 
    }
}

const initialState: InitialState = {
    Countries: [],
    error: "",
    status: "Loading",
    theme: "light",
    Filtered: []
}
export const UseReducer = () => {
  
    const [state, dispatch] = useReducer(reduce,initialState)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<country[]>("https://restcountries.com/v3.1/all");
                dispatch({ type: "ADD", payload: response.data });
            } catch (error) {
                const e = error as AxiosError
                dispatch({ type: "Error", payload: e });
            }
        };
    
        fetchData();
    }, []);
    return {state,dispatch}
}
