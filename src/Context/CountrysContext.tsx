import { createContext, useContext, useEffect, useState } from "react";
import { countryType } from "../@types/Types";
import { getCountries } from "../functions/getCountries";

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
