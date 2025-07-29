import { countryType } from "../@types/Types";
import { getFromLocalStorage } from "./getFromLocalStorage";

export function retrieveCountriesFromLocalStorage(
  key: string
): null | { countries: countryType[]; time: number } {
  const data = getFromLocalStorage(key);
  return data ? JSON.parse(data) : null;
}
