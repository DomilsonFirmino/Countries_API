import { useState } from "react"
import { country } from "../../@types/Types"
import { Button } from "../Button"
import { Countrie } from "../Countrie"


type Props = {
    countrys: country[],
    filterBy?: string
}
export const CountryList = ({countrys,filterBy = "none"}: Props) => {
   
    const [pageIndex, setPageIndex] = useState(1)

    const filter = filterBy == "none" ? countrys : countrys.filter( item => item.name.official.toLowerCase().includes(filterBy))

    const TotalCountrys = Math.round(filter.length / 20 )
    const pageNumber = Array.from({length: TotalCountrys}, (_, i) => i + 1)

    return (
        <div>
            <div>
                {filter.length != 0 ? filter.map((value,index)=>( index >= (pageIndex*20) - 20 && index < (pageIndex*20) ?
                    (<Countrie key={index} type="list" country={value}/>): ""
                )): "Não encontramos nada"}
            </div>

            <div style={{display: "flex", gap: ".5rem"}}>
                {pageNumber.length > 0 ? pageNumber.map((value, index) => (
                    <Button key={index} text={value.toString()} onClick={()=>setPageIndex(index+1)} />
                )): ""}
            </div>
        </div>
    )
}