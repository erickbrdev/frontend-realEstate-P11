export default function FilterLocal () {
  return (   
    <div className="flex flex-col mt-3 ml-2.5 gap-3">
      <h3 className="font-bold text-lg">Onde?</h3>
      <input list="cities" name="city" id="city"  className="border-2 border-black p-1 rounded-md"/>
      <datalist id="cities">        
        <option value="Araruama"/>       
        <option value="Saquarema"/>
      </datalist>                
    </div> 
  )
} 