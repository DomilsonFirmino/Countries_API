import { country } from "../@types/Types";

export function returnKey(filter: country[]) {
    return (Object.keys(filter[0].name.nativeName))[0]
}

export default function CheckObject(x: country | null | undefined): boolean{
    if (typeof x === 'object' && !Array.isArray(x) && x !== null) {
        return true
    }
    return false
}
