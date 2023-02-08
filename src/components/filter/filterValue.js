export default function FilterValue () {
  return (    
    <div className="flex flex-col mt-3 ml-2.5 gap-3">
      <h3 className="font-bold text-lg">Valores</h3>
      <div className="flex gap-1 items-center">          
        <label htmlFor="valor_min">Valor mín.</label>             
        <input  
          id="valor_min" 
          type="text" 
          maxlength="14" 
          name="valor_min" 
          placeholder="mín."
          className="border-2 border-yellow-400 w-20 p-0.5 rounded-lg"
        />
      </div>
      <div className="flex gap-1 items-center">          
        <label htmlFor="valor_max">Valor max.</label>             
        <input  
          id="valor_max" 
          type="text" 
          maxlength="14" 
          name="valor_max" 
          placeholder="max."
          className="border-2 border-yellow-400 w-20 p-0.5 rounded-lg"
        />
      </div>
    </div>   
  )
} 