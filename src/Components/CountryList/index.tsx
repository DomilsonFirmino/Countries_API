import { useEffect, useState } from "react"
import { country } from "../../@types/Types"
import { Button } from "../Button"
import { Countrie } from "../Countrie"


type Props = {
    countrys: country[],
    filterByName?: string,
    filterByRegion?: string
}

export const CountryList = ({countrys,filterByName,filterByRegion}: Props) => {
   
    const [pageIndex, setPageIndex] = useState(1)

    useEffect(()=>{
        setPageIndex(1)
    },[filterByName, filterByRegion])

    let filter
    if(filterByName != undefined && filterByRegion == undefined)
        filter = countrys.filter( item => item.name.official.toLowerCase().includes(filterByName.toLowerCase()))
    else if(filterByName == undefined && filterByRegion != undefined)
        filter = countrys.filter( item => item.region.includes(filterByRegion))
    else
        filter = countrys

    const TotalCountrys = Math.round(filter.length / 20 )
    const pageNumber = Array.from({length: TotalCountrys}, (_, i) => i + 1)

    const handleClick = (index: number)=>{
        if(index == pageIndex)
            return
        else{
            setPageIndex(index)
            window.scrollTo(0,0)
        }
    }
    return (
        <div>
            <div style={styles}>
                {filter.length != 0 ? filter.map((value,index)=>( index >= (pageIndex*20) - 20 && index < (pageIndex*20) ?
                    (<Countrie key={index} country={value}/>): ""
                )): "Não encontramos nada"}
            </div>

            <div style={{display: "flex", gap: ".5rem", flexWrap: "wrap",paddingBottom: "1rem",justifyContent: "center"}}>
                {pageNumber.length > 0 ? pageNumber.map((value, index) => (
                    <Button light={pageIndex == index+1} key={index} text={value.toString()} onClick={()=>handleClick(index+1)} />
                )): ""}
            </div>
        </div>
    )
}

const styles = {
    padding: "2rem 0rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(12rem, 1fr))",
    gridGap: "2rem"
}