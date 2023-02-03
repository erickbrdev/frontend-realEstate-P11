export default function FilterLocal () {
  return (   
    <div className="flex flex-col mt-3 ml-2.5 gap-3">
      <h3 className="font-bold text-lg">Onde?</h3>
      <select>
        <option disabled selected className="hidden">Cidades</option>
        <option>Araruama</option>
        <option>Cabo-Frio</option>
        <option>Saquarema</option>
      </select>                
    </div> 
  )
} 