import { CountriesList } from "./CountriesList"
import { Filters } from "./Filters"
export const Main = () => {
  return (
    <div>
      <Filters/>
      <CountriesList></CountriesList>
    </div>
  )
}
