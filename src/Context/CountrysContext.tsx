import { createContext, useContext, useEffect, useState } from "react";
import { countryType } from "../@types/Types";
import { getCountries } from "../functions/getCountries";
import { saveCountriesToLocalStorage } from "../functions/saveCountriesToLocalStorage";
import { retrieveCountriesFromLocalStorage } from "../functions/retrieveCountriesFromLocalStorage";
import { DateToMinutes } from "../functions/hours";

type Props = {
  countrys: countryType[];
  isLoading: boolean;
  error: string;
  status: "ready" | "error" | "standby";
};

const initialState: Props = {
  countrys: [],
  isLoading: false,
  error: "",
  status: "standby",
};

const CountrysContext = createContext(initialState);

// const sortOrder = (a: countryType, b: countryType) => {
//   const nameA = a.name.official.toUpperCase(); // ignore upper and lowercase
//   const nameB = b.name.official.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// };

export const CountrysProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [countrys, setCountrys] = useState<countryType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"ready" | "error" | "standby">(
    "standby"
  );
  const [error, setError] = useState("");

  useEffect(() => {
    const abort = new AbortController();
    const { signal } = abort;

    const FetchData = async () => {
      setIsLoading(true);
      setStatus("standby");
      setError("");

      const savedCountriesData = retrieveCountriesFromLocalStorage(
        import.meta.env.VITE_LOCAL_STORAGE_COUNTRIES_KEY
      );

      const newTime = DateToMinutes(new Date());

      if (
        !savedCountriesData ||
        Math.abs(savedCountriesData.time - newTime) >= 5
      ) {
        const { data, message, status } = await getCountries(signal);

        if (status == "400") {
          setError(message);
          setIsLoading(false);
          setStatus("ready");
          return;
        }

        setIsLoading(false);
        setStatus("ready");
        setCountrys(data);

        saveCountriesToLocalStorage(data, new Date());
        console.log("Se cheguei aq fiz um novo fetch");
      } else {
        setIsLoading(false);
        setStatus("ready");
        setCountrys(savedCountriesData.countries);
        console.log("Se cheguei aq, peguei do localStorage");
      }
    };

    FetchData();

    return () => {
      abort.abort();
    };
  }, []);

  return (
    <CountrysContext.Provider value={{ countrys, isLoading, error, status }}>
      {children}
    </CountrysContext.Provider>
  );
};

export const useCountrysContext = () => useContext(CountrysContext);
