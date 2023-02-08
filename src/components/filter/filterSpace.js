import React from "react"

export default function FilterSpace () {
  return (       
    <div className="flex flex-col mt-3 ml-2.5 gap-3">
      <div>
        <h3 className="font-bold text-lg">Quartos</h3>
        <div className="flex gap-6">
          <label className="flex items-center">
            <input type="checkbox" name="quarto" value="1" />
            <span>1</span>  
          </label>  
          <label className="flex items-center">
            <input type="checkbox" name="quarto" value="2" />
            <span>2</span>  
          </label>   
          <label className="flex items-center">
            <input type="checkbox" name="quarto" value="3" />
            <span>3+ </span>  
          </label>   
        </div>                
      </div>
      <div>
        <h3 className="font-bold text-lg">Banheiros</h3>
        <div className="flex gap-6">
          <label className="flex items-center">
            <input type="checkbox" name="banheiro" value="1" />
            <span>1</span>  
          </label>  
          <label className="flex items-center">
            <input type="checkbox" name="banheiro" value="2" />
            <span>2</span>  
          </label>   
          <label className="flex items-center">
            <input type="checkbox" name="banheiro" value="3 ou mais" />
            <span>3+ </span>  
          </label>   
        </div>                
      </div>                 
      <div>
        <h3 className="font-bold text-lg">Vagas</h3>
        <div className="flex gap-6">
          <label className="flex items-center">
            <input type="checkbox" name="vagas" value="1" />
            <span>1</span>  
          </label>  
          <label className="flex items-center">
            <input type="checkbox" name="vagas" value="2" />
            <span>2</span>  
          </label>   
          <label className="flex items-center">
            <input type="checkbox" name="vagas" value="3 ou mais" />
            <span>3+ </span>  
          </label>   
        </div>                
      </div>                                  
    </div> 
  )
} 