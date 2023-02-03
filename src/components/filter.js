import FilterLocal from "./filter/filterLocal"
import FilterOptions from "./filter/filterOptions"
import FilterType from "./filter/filterType"
import FilterValue from "./filter/filterValue"

export default function Filter() {
  return (
    <main className="flex flex-col items-start">      
      <FilterOptions />
      <FilterLocal />
      <FilterType />
      <FilterValue />
    </main>
  )
} 