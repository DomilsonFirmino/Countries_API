import { Dispatch } from "react"
import { AxiosError } from 'axios'

export type User = {
    name: Theme,
    setName: Dispatch<React.SetStateAction<Theme>>
}

type translation = {
  official: string,
  common: string
}

export type country =  {
    name: {
      comon: string,
      official: string,
      nativeName: {
        [key:string]: translation
      }
    },

    tld: string[],

    cca2: string,

    cca3: string,

    ccn3: string,

    idd: {
      root: string,
      suffixes: string[],
    }

    callingCodes: string[],

    capital: string[],

    latlng: number[],

    capitalInfo: {
      latlng: number[]
    }

    altSpellings: string[],

    subregion: string,

    region: string,

    population: number,

    demonyms: {
      [key:string]: {
        [key: string]: string,
      }
    },
    
    unMember: boolean,

    area: number,

    gini?: {
      [key:string]: number
    },

    maps: {
      googleMaps: string,
      openStreetMaps: string
    }

    landlocked: boolean,

    timezones:string[],

    borders: string[],

    continents: string[],

    numericCode: string,

    flags: {
      svg: string,
      png: string,
      alt: string
    },

    coatofArms: {
      png: string,
      svg: string
    },

    startOfWeek: string,

    currencies:  {
      [key: string]: {
        name: string,
        symbol: string
      }
    }[],

    languages:{
        [key:string]: string
    }[],

    translations: {
      [key: string]: translation
    },

    flag: string,

    regionalBlocs:{
        acronym: string,
        name: string,
        otherNames?: string[]
    }[],

    cioc?: string,

    independent: boolean,

    status: string

    fifa?: string

    postalCode: {
      format: string,
      regex: string
    }
}


export type InitialState = {
  Countries: country[],
  error: string,
  status: "Loading" | "Ready",
  theme: "light" | "dark",
  Filtered: country[] | country | null
}
export type ActionType = {type:"ADD", payload: country[]} | {type: "Error", payload: AxiosError} | {type: "CHANGETHEME"} | {type:"FILTERREG", payload: string } | {type:"FILTER", payload: string }

export type Theme = "light" | "dark"