import FilterLocal from "./filter/filterLocal"
import FilterOptions from "./filter/filterOptions"
import FilterType from "./filter/filterType"
import FilterValue from "./filter/filterValue"
import FilterSpace from "./filter/filterSpace"

export default function Filter() {
  return (
    <main className="flex flex-col items-start p-2 h-max  bg-yellow-100 w-72 rounded-lg">        
      <FilterOptions />
      <FilterLocal />
      <FilterType />
      <FilterValue />
      <FilterSpace />
    </main>
  )
} 