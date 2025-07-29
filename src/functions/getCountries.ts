import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../constant";
import { countryType } from "../@types/Types";

const DEFAULT_FIELDS = [
  "name",
  "population",
  "region",
  "flags",
  "languages",
  "capital",
  "currencies",
  "subregion",
  "borders",
];

interface CountryResponse {
  data: countryType[];
  message: string;
  status: string;
}

function parseError(error: unknown): CountryResponse {
  if (error instanceof AxiosError) {
    return {
      data: [],
      message: error.message,
      status: String(error.response?.status || 400),
    };
  }
  return { data: [], message: "Unexpected error occurred", status: "500" };
}

export async function getCountries(
  signal: AbortSignal,
  fields: string[] = DEFAULT_FIELDS,
  retry: number = 3
): Promise<CountryResponse> {
  if (retry < 1) retry = 1;

  const url = `${API_BASE_URL}?fields=${fields.join(",")}`;

  for (let attempts = 0; attempts <= retry; attempts++) {
    try {
      const response = await axios.get(url, { signal, timeout: 1000 });
      return {
        data: response.data,
        message: "success",
        status: String(response.status),
      };
    } catch (error) {
      attempts++;
      console.log(attempts, "Numbers of attempts, trying again...");
      if (attempts === retry) {
        return parseError(error);
      }
    }
  }
  return { data: [], message: "Unexpected exit", status: "500" };
}
