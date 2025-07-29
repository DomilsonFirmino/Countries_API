import { countryType } from "../@types/Types";
import { getFromLocalStorage } from "./getFromLocalStorage";
import { DateToMinutes } from "./hours";
import { setToLocalStorage } from "./setToLocalStorage";

export function saveCountriesToLocalStorage(
  countries: countryType[],
  date: Date
) {
  const totalMinutes = DateToMinutes(date);
  if (getFromLocalStorage(import.meta.env.VITE_LOCAL_STORAGE_COUNTRIES_KEY))
    localStorage.removeItem(import.meta.env.VITE_LOCAL_STORAGE_COUNTRIES_KEY);
  setToLocalStorage(
    import.meta.env.VITE_LOCAL_STORAGE_COUNTRIES_KEY,
    JSON.stringify({ countries, time: totalMinutes })
  );
}
