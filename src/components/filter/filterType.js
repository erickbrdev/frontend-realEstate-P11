import React, { useContext } from "react";
import ImmobileContext from "../../context/ImmobileContext";

export default function FilterType() {
  const { filterValueByType } = useContext(ImmobileContext)

  return (
    <div className="mt-3 ml-2.5">
      <h3 className="font-bold text-lg">Tipos</h3>
      <div className="flex flex-col justify-center gap-1">
        <div className="flex gap-1 items-center">
          <label htmlFor="venda">Apartamento</label>
          <input
            type="checkbox"
            key="apartamento"
            id="apartamento"
            value="Apartamento"      
            onChange={filterValueByType}    
          />
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="casa">Casa</label>
          <input type="checkbox" id="casa" value="Casa" onChange={filterValueByType}     />
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="loja">Loja</label>
          <input type="checkbox" id="loja" value="Loja" onChange={filterValueByType}    />
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="sitio">Sítio</label>
          <input type="checkbox" id="sitio" value="Sitio" onChange={filterValueByType}    />
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="terreno">Terreno</label>
          <input type="checkbox" id="terreno" value="Terreno" onChange={filterValueByType}    />
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="sala">Sala</label>
          <input type="checkbox" id="sala" value="Sala" onChange={filterValueByType}    />
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="predio-residencial">Prédio Residencial</label>
          <input
            type="checkbox"
            id="predio-residencial"
            value="Predio residencial"
            onChange={filterValueByType}    
          />
        </div>
      </div>
    </div>
  );
}
