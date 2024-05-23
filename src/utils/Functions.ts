import { Languagues, country, currencie, translations } from "../@types/Types";

export function returnArray(valor: currencie){
    const Array =  Object.entries(valor)
    return Array
}

export function returnArrayN(valor: translations){
    const Array =  Object.entries(valor)[0]
    return Array
}


export function returnArrayL(valor: Languagues){
    const Array =  Object.entries(valor)
    return Array
}


export default function CheckObject(x: country | null | undefined): boolean{
    if (typeof x === 'object' && !Array.isArray(x) && x !== null) {
        return true
    }
    return false
}
