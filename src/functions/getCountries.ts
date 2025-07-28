import axios, { AxiosError } from "axios"
import { API_BASE_URL } from "../constant"
import { countryType } from "../@types/Types"

export async function getCountries(fields: string[] = ["name","population","region","flags","languagues", "capital","currencies","currencies","subregion","borders"]): Promise<{
    data: countryType[], message: string,status: string
}>{

    const api = `${API_BASE_URL}?fields=${fields.toString()}`

    try {
        const response = await axios.get(api)
        return {data: response.data,message: "sucess", status: String(response.status)}
    } catch (error) {
        if(error instanceof AxiosError)
           return {data: [], message: error.message, status: "400"}
        else
            return {data: [], message: "Something Else", status: "400"}
    }
}