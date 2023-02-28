export default function FilterType () {
  return (    
    <div className="mt-3 ml-2.5">
      <h3 className="font-bold text-lg">Tipos</h3>
      <div className="flex flex-col justify-center gap-1">
        <div className="flex gap-1 items-center">
          <label htmlFor="venda">Apartamento</label>
          <input type="checkbox" id="apartamento" value="apartamento"/>          
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="aluguel">Casa</label>
          <input type="checkbox" id="casa" value="casa"/>
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="aluguel">Loja</label>
          <input type="checkbox" id="loja" value="loja"/>
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="aluguel">Sítio</label>
          <input type="checkbox" id="sitio" value="sitio"/>
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="terreno">Terreno</label>
          <input type="checkbox" id="terreno" value="terreno"/>
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="sala">Sala</label>
          <input type="checkbox" id="sala" value="sala"/>
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="aluguel">Prédio Residencial</label>
          <input type="checkbox" id="predio-residencial" value="predio-residencial"/>
        </div>
      </div>
    </div>      
  )
} 