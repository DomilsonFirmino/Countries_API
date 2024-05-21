import { Dispatch } from "react"
import { AxiosError } from 'axios'

export type User = {
    name: Theme,
    setName: Dispatch<React.SetStateAction<Theme>>
}

export type country =  {
    name: string,
    topLevelDomain: string[],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: string[],
    capital: string,
    altSpellings: string[],
    subregion: string,
    region: string,
    population: number,
    latlng: number[],
    demonym: string,
    area: number,
    gini?: number,
    timezones:string[],
    borders: string[],
    nativeName: string,
    numericCode: string,
    flags: {
      svg: string,
      png: string
    },
    currencies:  {
        code: string,
        name: string,
        symbol: string
    }[],
    languages:
      {
        iso639_1: string,
        iso639_2: string,
        name: string,
        nativeName: string
      }[],
    translations: {
      br: string,
      pt: string,
      nl: string,
      hr: string,
      fa: string,
      de: string,
      es: string,
      fr: string,
      ja: string,
      it: string,
      hu: string
    },
    flag: string,
    regionalBlocs:{
        acronym: string,
        name: string,
        otherNames?: string[]
    }[],
    cioc?: string,
    independent: boolean
}


export type InitialState = {
  Countries: country[],
  error: string,
  status: "Loading" | "Ready",
  theme: "light" | "dark"
}
export type ActionType = {type:"ADD", payload: country[]} | {type: "Error", payload: AxiosError} | {type: "CHANGETHEME"}

export type Theme = "light" | "dark"